import { CursosService } from './cursos.service';
import { Curso } from './curso';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseResolverGuard implements Resolve<Curso> {

  constructor(private service: CursosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Curso | Observable<Curso> | Promise<Curso> {

    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }

    return of({
      id: null,
      nome: null
    });
  }

}
