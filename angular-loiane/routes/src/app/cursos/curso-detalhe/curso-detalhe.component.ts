import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

import { CursosService } from './../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  inscricao: Subscription;
  curso: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _cursoService: CursosService
  ) {
    // this.id = this._route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this._route.params.subscribe(params => {
      this.curso = this._cursoService.getCurso(parseInt(params.id));

      if (!this.curso) {
        this._router.navigate(['/cursos/naoEncontrado'])
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
