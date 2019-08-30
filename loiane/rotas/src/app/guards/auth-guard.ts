import { AuthService } from './../login/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private autthService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      return this.verificarAcesso();
    }

    private verificarAcesso() {
      if (this.autthService.usuarioEstaAutenticado()) {
        return true;
      }

      this.router.navigate(['/login']);
      return false;
    }

    canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
        return this.verificarAcesso();
      }
}
