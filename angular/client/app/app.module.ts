import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import 'rxjs/add/operator/map'

import { AppComponent } from './app.component'
import { routing } from './app.routes'
import { ListagemComponent } from './listagem/listagem.component'
import { CadastroComponent } from './cadastro/cadastro.component'

import { ModalModule } from './modal/modal.module'
import { PainelModule } from './painel/painel.module'
import { FotoModule } from './foto/foto.module'
import { BotaoModule } from './botao/botao.module'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,

        routing,

        ModalModule,
        PainelModule,
        FotoModule,
        BotaoModule
    ],
    declarations: [ AppComponent, ListagemComponent, CadastroComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
