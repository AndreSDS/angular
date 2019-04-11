import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MzInputModule, MzValidationModule } from 'ngx-materialize';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MzInputModule,
    MzValidationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
