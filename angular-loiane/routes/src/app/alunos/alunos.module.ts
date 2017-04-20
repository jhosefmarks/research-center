import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AlunosRoutingModule } from './alunos-routing.modules';

import { AlunosService } from './alunos.service';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],
  exports: [],
  providers: [
    AlunosService,
    AlunosDeactivateGuard,
    AlunoDetalheResolver
  ]
})
export class AlunosModule { }
