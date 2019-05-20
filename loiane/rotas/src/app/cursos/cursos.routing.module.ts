import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoNEncontradoComponent } from './curso-n-encontrado/curso-n-encontrado.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { CursosComponent } from './cursos.component';

const cursosRoutes: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: DetalheComponent },
  { path: 'naoEncontrado', component: CursoNEncontradoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}
