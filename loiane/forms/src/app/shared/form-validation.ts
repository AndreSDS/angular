import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidation {

  static requiredMinCheckbox(min = 1) {
    const validator = (formArray: FormArray) => {
      const totalChecked = formArray.controls
      .map(v => v.value)
      .reduce((total, current) => current ? total + current : total, 0);
      return totalChecked >= min ? null : { required: true };
    };
    return validator;
  }

  static cepValidator(control: FormControl) {
    const cep = control.value;

    if (cep && cep !== '') {
      const validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : { cepInvalido: true };
    }
    return null;
  }

  static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if ( otherField == null ) {
        throw new Error('É necessário informar um campo.');
      }

      if ( !formControl.root || !(formControl.root as FormGroup).controls) {
        return null;
      }

      const field = (formControl.root as FormGroup).get(otherField);

      if (!field) {
        throw new Error('É necessário informar um campo válido.');
      }

      if (field.value !== formControl.value) {
        return { equalsTo : otherField };
      }

      return null;
    };
    return validator;
  }

}
