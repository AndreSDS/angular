import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursoService {

  emitrCursoCriado = new EventEmitter<string>();

  private cursos = ['André', 'Souza', 'da silva'];

  constructor(private logService: LogService) {
    console.log('CursoService');
  }

  getCursos( ) {
    this.logService.logService('Obtendo lista de cursos.');
    return this.cursos;
  }

  addCurso(curso) {
    this.logService.logService(`Criando novo curso: ${curso}`);
    this.cursos.push(curso);
    this.emitrCursoCriado.emit(curso);
  }
}
