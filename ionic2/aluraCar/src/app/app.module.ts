import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { UsuarioService } from './../domain/usuario/usuario.service';
import { AgendamentoService } from './../domain/agendamento/agendamento-service';
import { AgendamentoDao } from './../domain/agendamento/agendamento-dao';

import { MyApp } from './app.component';
import { LoginPage } from './../pages/login/login';
import { PerfilPage } from './../pages/perfil/perfil';
import { HomePage } from '../pages/home/home';
import { EscolhaPage } from './../pages/escolha/escolha';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { AgendamentosPage } from './../pages/agendamentos/agendamentos';

function provideStorage() {
  return new Storage(['indexeddb'], {
    name: 'aluracar',
    storeName: 'agendamentos'
  });
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    PerfilPage,
    HomePage,
    EscolhaPage,
    CadastroPage,
    AgendamentosPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    PerfilPage,
    HomePage,
    EscolhaPage,
    CadastroPage,
    AgendamentosPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: Storage, useFactory: provideStorage},
    UsuarioService,
    AgendamentoService,
    AgendamentoDao]
})
export class AppModule {}
