import { CursoService } from './curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos = [];
  cursoService: CursoService;

  constructor() {
    this.cursoService = new CursoService();
  }

  ngOnInit() {
    this.cursos = this.cursoService.getCursos();
  }

}
