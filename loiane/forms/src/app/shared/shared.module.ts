import { CampoControlComponent } from './campo-control-erro/campo-control.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlComponent
  ],
  exports: [
    FormDebugComponent,
    CampoControlComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
