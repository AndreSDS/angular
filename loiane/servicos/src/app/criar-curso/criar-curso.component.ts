import { Component, OnInit } from '@angular/core';

import { CursoService } from '../cursos/curso.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
})
export class CriarCursoComponent implements OnInit {

  cursos = [];

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

  onAddCurso(curso) {
    this.cursoService.addCurso(curso);
  }

}
