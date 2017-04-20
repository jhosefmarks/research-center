import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private _alunos: any = [
      {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
      {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
      {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'}
    ]

  constructor() { }

  getAlunos() {
    return this._alunos;
  }

  getAluno(id: number) {
    return this._alunos.find(aluno => aluno.id === id)
  }

}
