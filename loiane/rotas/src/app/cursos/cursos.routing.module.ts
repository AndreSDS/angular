import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoNEncontradoComponent } from './curso-n-encontrado/curso-n-encontrado.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { CursosComponent } from './cursos.component';

const cursosRoutes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'naoEncontrado', component: CursoNEncontradoComponent },
  { path: ':id', component: DetalheComponent }
];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}
