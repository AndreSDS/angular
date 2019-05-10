import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CursoNEncontradoComponent } from './curso-n-encontrado/curso-n-encontrado.component';
import { DetaheComponent } from './detalhe/detalhe.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: DetaheComponent },
  { path: 'naoEncontrado', component: CursoNEncontradoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}