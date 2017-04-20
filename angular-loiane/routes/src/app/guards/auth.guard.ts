import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private _authServce: AuthService,
    private _router: Router
  ) {

  }

  private verificarAcesso() {
    if (this._authServce.usuarioEstaAutenticado()) {
      return true;
    }

    this._router.navigate(['/login']);
    return false;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('auth.guards: canActivate');
    return this.verificarAcesso();
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    console.log('auth.guards: canLoad');
    return this.verificarAcesso();
  }
}
