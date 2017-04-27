import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuemSomosComponent } from './quem-somos.component';

const quemSomosRoutes: Routes = [
  {path: 'quem-somos', component:  QuemSomosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(quemSomosRoutes)],
  exports: [RouterModule]
})
export class QuemSomosRoutingModule {}
