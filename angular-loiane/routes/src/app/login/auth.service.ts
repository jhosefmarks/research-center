import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private _router: Router
  ) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'admin' && usuario.senha === 'master') {
      this.usuarioAutenticado = true;

      this._router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
    }

    this.mostrarMenuEmitter.emit(this.usuarioAutenticado);
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
