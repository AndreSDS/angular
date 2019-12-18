import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { DropdownService } from '../shared/services/dropdown.service';
import { Estados } from '../shared/models/estados.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup;
  // estados: Estados[];
  estados: Observable<Estados[]>;
  cargos: any[];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService) {}

  ngOnInit() {

    this.cargos = this.dropdownService.getCargos();

    this.estados = this.dropdownService.getEstados();
    // this.dropdownService.getEstados().subscribe( dados => this.estados = dados );

    /*this.formulario = new FormGroup({
      nome: new FormControl(),
      email: new FormControl()
    });*/

    this.formulario = this.formBuilder.group({
      cargo: [null],
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.http
        .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .pipe(map(res => res))
        .subscribe(
          dados => {
            console.log(dados);
            this.formulario.reset();
          },
          (error: any) => alert('error')
        );
    } else {
      this.verificaValidaForm(this.formulario);
    }
  }

  verificaValidaForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();

      if (controle instanceof FormGroup) {
        this.verificaValidaForm(controle);
      } else {
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidaTouched(campo: string) {
    return (
      !this.formulario.get(campo).valid && this.formulario.get(campo).touched
    );
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidaTouched(campo),
      'has-feedback': this.verificaValidaTouched(campo)
    };
  }

  consultaCEP() {
    const cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
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
    const cargo = {nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'};
    this.formulario.get('cargo').setValue(cargo);
  }

  compararcargos(ob1, ob2) {
    return ob1 && ob2 ? (ob1.nome === ob2.nome && ob1.nivel === ob2.nivel) : ob1 === ob2;
  }
}
