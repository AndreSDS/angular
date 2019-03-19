import { Component, OnInit } from '@angular/core';

import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {

  cursos = [];

  constructor(private cursoService: CursoService) {
  }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();

    this.cursoService.emitrCursoCriado.subscribe(
      (curso) => console.log(curso)
    );
  }
}
