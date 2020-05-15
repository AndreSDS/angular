import { Injectable } from '@angular/core';
import { Curso } from '../cursos/curso';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CrudService } from './crud-service';

@Injectable({
  providedIn: 'root'
})
export class CursoCrudService extends CrudService<Curso> {

  constructor(protected http: HttpClient) {
    super(http,`${environment.API}cursos` );
  }
}
