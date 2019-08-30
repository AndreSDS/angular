import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  getCursos() {
    return [
    {id: 1, nome: 'angular 2'},
    {id: 2, nome: 'Java'}
   ];
  }

  getCurso(id: number) {
    const cursos = this.getCursos();
// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < cursos.length; i++) {
      const curso = cursos[i];
// tslint:disable-next-line: triple-equals
      if (curso.id == id) {
        return curso;
      }
    }
  }
  constructor() { }
}
