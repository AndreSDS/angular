import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  getCursos(){
    return [
    {id: 1, nome: 'angular 2'},
    {id: 2, nome: 'Java'}
   ];
  }

  getCurso(id: number){
    const cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++){
      let curso = cursos[i];
      if (curso.id == id){
        return curso;
      }
    }
    return null;
  }

  constructor() { }
}
