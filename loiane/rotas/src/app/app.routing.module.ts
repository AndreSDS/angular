import { PaginaNEncontradaComponent } from './pagina-n-encontrada/pagina-n-encontrada.component';
import { NgModule } from '@angular/core';
import {ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth-guard';
// import { AlunosGuard } from './guards/alunos.guard';
const appRoutes: Routes = [
  { path: 'cursos',
    loadChildren: './cursos/cursos.module#CursosModule',
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard]
  },
  { path: 'alunos',
    loadChildren: './alunos/alunos.module#AlunosModule',
    canActivate: [AuthGuard],
    // canActivateChild: [AlunosGuard],
    canLoad: [AuthGuard]
  },
  { path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PaginaNEncontradaComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
