import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunosService {

  private alunos: Aluno[] = [
    { id: 1, nome: 'Aluno 1', email: 'aluno1@gmail.com' },
    { id: 2, nome: 'Aluno 2', email: 'aluno2@gmail.com' },
    { id: 3, nome: 'Aluno 3', email: 'aluno3@gmail.com' }
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
// tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.alunos.length; i++) {
     const aluno = this.alunos[i];

     // tslint:disable-next-line: triple-equals
     if (aluno.id == id) {
       return aluno;
      }
    }
  }

  constructor() { }
}
