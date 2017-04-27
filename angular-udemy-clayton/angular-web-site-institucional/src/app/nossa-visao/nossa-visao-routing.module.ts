import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NossaVisaoComponent } from './nossa-visao.component';

const nossaVisaoRoutes: Routes = [
  {path: 'nossa-visao', component:  NossaVisaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(nossaVisaoRoutes)],
  exports: [RouterModule]
})
export class NossaVisaoRoutingModule {}
