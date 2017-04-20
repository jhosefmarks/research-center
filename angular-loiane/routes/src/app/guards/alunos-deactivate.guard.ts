import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IFormCandeactivate } from './iform-candeactivate';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCandeactivate> {
  canDeactivate(
    component: IFormCandeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return component.podeDesativar();
  }
}
