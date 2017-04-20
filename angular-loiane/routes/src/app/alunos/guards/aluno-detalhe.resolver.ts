import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AlunosService } from './../alunos.service';
import { Aluno } from './../aluno';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
  constructor(private _alunosService: AlunosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
      console.log('aluno-detalhe.resolver');
      const id = parseInt(route.params.id, 10);

      return this._alunosService.getAluno(id);
  }
}
