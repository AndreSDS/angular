import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Estados } from '../models/estados.model';
import { Cidade } from '../models/cidades';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DropdownService {
  constructor(private http: HttpClient) {}

  getEstados() {
    return this.http.get<Estados[]>('assets/estados.json');
  }

  getCidades(idEstado: number) {
    return this.http.get<Cidade[]>('assets/cidades.json')
    .pipe(
      map((cidades: Cidade[]) => cidades.filter(c => c.estado == idEstado))
    );
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' }
    ];
  }

  getTecnologias() {
    return [
      { nome: 'java', desc: 'Java' },
      { nome: 'javascript', desc: 'JavaScript' },
      { nome: 'php', desc: 'PHP' },
      { nome: 'ruby', desc: 'Ruby' }
    ];
  }

  getNewsletter() {
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Não' }
    ];
  }
}
