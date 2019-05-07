import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
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

  proximaPagina() {
    // this.pagina++;
    this.router.navigate(
      ['/cursos'],
      {queryParams: {pagina: ++this.pagina}}
      );
  }

}
