import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    { id: 1, nome: 'Aluno 1', email: 'aluno1@gmail.com' },
    { id: 2, nome: 'Aluno 2', email: 'aluno2@gmail.com' },
    { id: 3, nome: 'Aluno 3', email: 'aluno3@gmail.com' }
  ];

  getAlunos() {
    return this.alunos;
  }

  constructor() { }
}
