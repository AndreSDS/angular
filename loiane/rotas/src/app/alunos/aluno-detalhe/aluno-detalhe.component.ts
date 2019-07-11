import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlunosService } from './../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno;
  inscricao: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    /*this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id = params.id;
        console.log(id);
        this.aluno = this.alunosService.getAluno(id);
      }
    );*/

    this.inscricao = this.route.data.subscribe(
      (info: { aluno: Aluno }) => {
        this.aluno = info.aluno;
      }
    );
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
