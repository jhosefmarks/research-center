import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://jhosefmarks.training';

    this.cursos = this.cursosService.getCursos()
  }

  ngOnInit() {
  }

}
