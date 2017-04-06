import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CursosComponent],
  declarations: [CursosComponent, CursoDetalheComponent],
  providers: [CursosService]
})
export class CursosModule { }
