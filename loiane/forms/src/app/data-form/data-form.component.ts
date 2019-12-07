import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
    ) { }

  ngOnInit() {
    /*this.formulario = new FormGroup({
      nome: new FormControl(),
      email: new FormControl()
    });*/

    this.formulario = this.formBuilder.group({
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
    this.http.post(
      'https://httpbin.org/post',
       JSON.stringify(this.formulario.value)
      ).pipe(map(res => res))
      .subscribe(dados => {
        console.log(dados);
        this.formulario.reset();
      },
      (error: any) => alert('error'));
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidaTouched(campo: string) {
    return this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidaTouched(campo),
      'has-feedback': this.verificaValidaTouched(campo)
    };
  }

}
