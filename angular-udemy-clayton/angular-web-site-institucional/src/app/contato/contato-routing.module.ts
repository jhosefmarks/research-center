import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatoComponent } from './contato.component';

const contatoRoutes: Routes = [
  {path: 'contato', component:  ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(contatoRoutes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule {}
