import { CursosRoutingModule } from './cursos.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoNEncontradoComponent } from './curso-n-encontrado/curso-n-encontrado.component';
import { CursosComponent } from './cursos.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { CursoService } from './curso.service';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  exports: [],
  declarations: [
    CursosComponent,
    DetalheComponent,
    CursoNEncontradoComponent
   ],
  providers: [
    CursoService
  ]
})

export class CursosModule {}
