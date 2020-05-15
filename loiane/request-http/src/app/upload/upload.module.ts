import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import { UploadFileComponent } from './upload-file/upload-file.component';


@NgModule({
  declarations: [UploadComponent, UploadFileComponent],
  imports: [
    CommonModule,
    UploadRoutingModule
  ]
})
export class UploadModule { }
