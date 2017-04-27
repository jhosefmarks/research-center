import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';

import { ContatoComponent } from './contato.component';

@NgModule({
  imports: [CommonModule, ContatoRoutingModule],
  declarations: [ContatoComponent]
})
export class ContatoModule { }
