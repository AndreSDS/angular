import { Component, OnInit } from '@angular/core';
import { CursoService } from './../../../../servicos/src/app/cursos/curso.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any [];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams.pagina;
      }
    );

  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
