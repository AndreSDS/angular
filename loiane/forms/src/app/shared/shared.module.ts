import { HttpClientModule } from '@angular/common/http';
import { CampoControlComponent } from './campo-control-erro/campo-control.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownService } from './services/dropdown.service';
import { ErrorMsgComponent } from './error-msg/error-msg.component';

@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlComponent,
    ErrorMsgComponent
  ],
  exports: [
    FormDebugComponent,
    CampoControlComponent,
    ErrorMsgComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ DropdownService ]
})
export class SharedModule { }
