import { CursoService } from './../cursos/curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receber-curso',
  templateUrl: './receber-curso.component.html',
  styleUrls: ['./receber-curso.component.css']
})
export class ReceberCursoComponent implements OnInit {

  curso: string;

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursoService.emitrCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    );
  }

}
