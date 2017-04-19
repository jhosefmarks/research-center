import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from './../shared/log.service';

@Injectable()
export class CursosService {

  private cursos: string[] = ['Angular', 'Ionic', 'JavaScript', 'TypeScript'];

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCriado = new EventEmitter<string>();

  constructor(
    private _logService: LogService
  ) {
    console.log('CursosService');
  }

  getCursos() {
    this._logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  addCurso(curso: string) {
    this._logService.consoleLog(`Criando um novo curso: ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCriado.emit(curso);
  }
}
