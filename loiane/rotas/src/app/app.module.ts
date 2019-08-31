import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth-guard';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { PaginaNEncontradaComponent } from './pagina-n-encontrada/pagina-n-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    ],
    providers: [
      AuthService,
      AuthGuard,
      CursosGuard,
      AlunosGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
