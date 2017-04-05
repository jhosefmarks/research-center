import { Component } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { FotoComponent} from '../foto/foto.component'

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    foto: FotoComponent = new FotoComponent ()
    http: Http


    constructor (http: Http) {
        this.http = http
    }

    cadastrar (event) {
        let headers = new Headers()

        event.preventDefault()

        headers.append('Content-type', 'application/json')

        this.http
            .post('v1/fotos', JSON.stringify(this.foto), {headers})
            .subscribe(() => this.foto = new FotoComponent())
    }
}
