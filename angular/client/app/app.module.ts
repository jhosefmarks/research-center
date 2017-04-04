import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import 'rxjs/add/operator/map'
import { AppComponent } from './app.component'
import { FotoModule } from './foto/foto.module'

@NgModule({
    imports: [ BrowserModule, HttpModule, FotoModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
