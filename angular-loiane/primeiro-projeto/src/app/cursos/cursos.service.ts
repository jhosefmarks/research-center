import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {



  constructor() { }

  getCursos () {
    return ['JavaScript', 'AngularJS', 'Angular', 'NodeJS'];
  }

}
