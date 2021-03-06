import { VerificaEmailService } from './services/verifica-email.service';
import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import {
  map,
  tap,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import { DropdownService } from '../shared/services/dropdown.service';
import { Estados } from '../shared/models/estados.model';
import { Observable, empty } from 'rxjs';
import { FormValidation } from '../shared/form-validation';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { Cidade } from '../shared/models/cidades';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends BaseFormComponent implements OnInit {
  // formulario: FormGroup;
  estados: Estados[];
  cidades: Cidade[];
  // estados: Observable<Estados[]>;
  cargos: any[];
  tecnologias: any[];
  newsletterOp: any[];

  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
  ) {
    super();
  }

  ngOnInit() {
    // this.VerifaEmailService.verificaEmail('email@email.com').subscribe();
    this.dropdownService.getEstados()
    .subscribe(dados => this.estados = dados);

    this.newsletterOp = this.dropdownService.getNewsletter();
    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnologias();
    // this.estados = this.dropdownService.getEstados();
    // this.dropdownService.getEstados().subscribe( dados => this.estados = dados );

    /*this.formulario = new FormGroup({
      nome: new FormControl(),
      email: new FormControl()
    });*/

    this.formulario = this.formBuilder.group({
      frameworks: this.buildFrameworks(),
      termos: [null, Validators.pattern('true')],
      newsletter: ['s'],
      tecnologias: [null],
      cargo: [null],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [
        null,
        [Validators.required, Validators.email],
        [this.validaEmail.bind(this)]
      ],
      confirmaEmail: [null, [FormValidation.equalsTo('email')]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidation.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });

    this.formulario
      .get('endereco.cep')
      .statusChanges.pipe(
        distinctUntilChanged(),
        tap(value => console.log('status CEP:', value)),
        switchMap(status =>
          status === 'VALID'
            ? this.cepService.consultaCEP(
                this.formulario.get('endereco.cep').value
              )
            : empty()
        )
      )
      .subscribe(dados => (dados ? this.populaDados(dados) : {}));

      this.formulario.get('endereco.estado').valueChanges
      .pipe(
        map(estado => this.estados.filter(e => e.sigla === estado )),
        map(estados => estados && estados.length > 0 ? estados[0].id : empty()),
        switchMap((estadoId: number) => this.dropdownService.getCidades(estadoId)),
        )
        .subscribe(cidades => this.cidades = cidades);
  }

  buildFrameworks() {
    const values = this.frameworks.map(v => new FormControl(false));
    return this.formBuilder.array(
      values,
      FormValidation.requiredMinCheckbox(1)
    );
  }

  submit() {
    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v: any, i: string | number) => (v ? this.frameworks[i] : null))
        .filter((v: any) => v !== null)
    });

    this.http
      .post('https://httpbin.org/post', JSON.stringify(valueSubmit))
      .pipe(map(res => res))
      .subscribe(
        dados => {
          console.log(dados);
          this.formulario.reset();
        },
        (error: any) => alert('error')
      );
  }

  consultaCEP() {
    const cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.cepService
        .consultaCEP(cep)
        .subscribe(dados => this.populaDados(dados));
    }
  }

  populaDados(dados) {
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  setCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo').setValue(cargo);
  }

  compararcargos(ob1, ob2) {
    return ob1 && ob2
      ? ob1.nome === ob2.nome && ob1.nivel === ob2.nivel
      : ob1 === ob2;
  }

  setTecnologias() {
    this.formulario.get('tecnologias').setValue(['java', 'javascript', 'php']);
  }

  validaEmail(formControl: FormControl) {
    return this.verificaEmailService
      .verificaEmail(formControl.value)
      .pipe(map(emailExiste => (emailExiste ? { emailInvalido: true } : null)));
  }
}
