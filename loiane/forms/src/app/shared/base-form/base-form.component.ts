import { FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-form',
  template: '<br/>'
})
export abstract class BaseFormComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  abstract submit();

  onSubmit() {
    if ( this.formulario.valid ) {
      this.submit();
    } else {
      this.verificaValidaForm(this.formulario);
    }
  }

  verificaValidaForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      controle.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
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
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  verificaRequired(campo: string) {
    return (
      this.formulario.get(campo).hasError('required') &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  verificaEmailInvalido() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors.email && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidaTouched(campo),
      'has-feedback': this.verificaValidaTouched(campo)
    };
  }

  getCampo(campo: string) {
    return this.formulario.get(campo);
  }

}
