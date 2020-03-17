import { AlertModalService } from './../../shared/alert-modal.service';
import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder, 
    private service: CursosService,
    private modal: AlertModalService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });
  }

  hasError(field: string){
   return this.form.get(field).errors;
  }

  onSubmit(){
    this.submitted = true;
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(
        success =>{ 
          this.modal.showAlertSuccess("Criado com ucesso"),
          this.location.back();
        },
        error => this.modal.showAlertDanger('Erro ao criar cruso. Tente novamente.'),
        () => console.log('request completo')
      );
    }
  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
  }

}
