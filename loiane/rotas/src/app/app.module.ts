import { CursosComponent } from './cursos/cursos.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'app.routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { routing } from './app.routing';
import { DetaheComponent } from './detalhe/detalhe.component';
import { CursoService } from './cursos/curso.service';
import { CursoNEncontradoComponent } from './curso-n-encontrado/curso-n-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosComponent,
    LoginComponent,
    DetaheComponent,
    CursoNEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    ],
  providers: [
    CursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
