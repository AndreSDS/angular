import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { routing } from './app.routing';
import { DetaheComponent } from './detahe/detahe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    DetaheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
