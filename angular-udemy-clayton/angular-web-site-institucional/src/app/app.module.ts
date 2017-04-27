import { NossaVisaoModule } from './nossa-visao/nossa-visao.module';
import { QuemSomosModule } from './quem-somos/quem-somos.module';
import { ContatoModule } from './contato/contato.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule,
    ContatoModule,
    QuemSomosModule,
    NossaVisaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
