import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Estados } from '../models/estados.model';

@Injectable()
export class DropdownService {
  constructor(private http: HttpClient) {}

  getEstados() {
    return this.http.get<Estados[]>('assets/estados.json');
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' }
    ];
  }
}
