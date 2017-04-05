import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import 'rxjs/add/operator/map'

import { AppComponent } from './app.component'
import { routing } from './app.routes'
import { ListagemComponent } from './listagem/listagem.component'
import { CadastroComponent } from './cadastro/cadastro.component'

import { PainelModule } from './painel/painel.module'
import { FotoModule } from './foto/foto.module'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,

        routing,

        PainelModule,
        FotoModule
    ],
    declarations: [ AppComponent, ListagemComponent, CadastroComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
