import { IFormCandeactivate } from './../../guards/iform-candeactivate';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Aluno } from './../aluno';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCandeactivate {

  inscricao: Subscription;
  aluno: Aluno;
  private formMudou = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _cursoService: AlunosService
  ) {}

  ngOnInit() {
    this.inscricao = this._route.params.subscribe(params => {
      this.aluno = this._cursoService.getAluno(parseInt(params.id, 10));

      if (!this.aluno) {
        this.aluno = new Aluno();
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
  }

  podeMudarRota() {
    if (this.formMudou) {
      return confirm('Tem certeza que deseja sair dessa página?');
    }

    return true;
  }

  podeDesativar() {
   return this.podeMudarRota();
  }

}
