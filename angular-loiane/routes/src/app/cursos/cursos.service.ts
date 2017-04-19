import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  private _cursos: any = [
      {id: 1, nome: 'JavaScript'},
      {id: 2, nome: 'Angular v4'},
      {id: 3, nome: 'TypeScript'}
    ]

  constructor() { }

  getCursos() {
    return this._cursos;
  }

  getCurso(id: number) {
    return this._cursos.find(curso => curso.id === id)
  }

}
