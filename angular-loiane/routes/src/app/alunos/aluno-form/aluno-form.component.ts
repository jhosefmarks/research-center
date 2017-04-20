import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy {

  inscricao: Subscription;
  aluno: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _cursoService: AlunosService
  ) {}

  ngOnInit() {
    this.inscricao = this._route.params.subscribe(params => {
      this.aluno = this._cursoService.getAluno(parseInt(params.id));

      if (!this.aluno) {
        this.aluno = {};
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
