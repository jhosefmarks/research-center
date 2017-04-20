import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Aluno } from './../aluno';
import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  inscricao: Subscription;
  aluno: Aluno;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _cursoService: AlunosService
  ) {}

  ngOnInit() {
    /* this.inscricao = this._route.params.subscribe(params => {
      this.aluno = this._cursoService.getAluno(parseInt(params.id));

      if (!this.aluno) {
        this._router.navigate(['/naoEncontrado'])
      }
    }); */
    console.log('ngOnInit: aluno-detalhe.component');
    this.inscricao = this._route.data.subscribe((data: {aluno: Aluno}) => {
      console.log('Recebendo o obj Aluno do resolver');
      this.aluno = data.aluno;
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this._router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}
