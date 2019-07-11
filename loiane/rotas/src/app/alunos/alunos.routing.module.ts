import { AlunoDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes = [
  {path: '', component: AlunosComponent,
  children: [
    {path: 'novo', component: AlunoFormComponent},
    {path: ':id', component: AlunoDetalheComponent,
      resolve: { aluno : AlunoDetalheResolver }
    },
    {path: ':id/editar', component: AlunoFormComponent,
      canDeactivate: [AlunoDeactivateGuard]
    }
  ]},
];

@NgModule ({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})

export class AlunosRoutingModule {}
