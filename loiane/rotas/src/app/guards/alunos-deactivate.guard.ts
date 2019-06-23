import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IFormCanDeactivate } from './formiDeactivate';

@Injectable()
export class AlunoDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
    canDeactivate(
      component: IFormCanDeactivate,
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

      console.log('chamou daeactivate guard');

      return component.podeDesativar();
  }
}
