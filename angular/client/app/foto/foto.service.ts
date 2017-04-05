import { Injectable } from '@angular/core'
import { Http, Headers, Response } from '@angular/http'
import { FotoComponent } from './foto.component'
import { Observable } from 'rxjs'

@Injectable()
export class FotoService {
    http: Http
    headers: Headers
    url: string = 'v1/fotos'

    constructor (http: Http) {
        this.http = http
        this.headers = new Headers()

        this.headers.append('Content-type', 'application/json')

    }

    // cadastra (foto: FotoComponent): Observable<{mensagem: string, inclusao: boolean}> {
    cadastra (foto: FotoComponent): Observable<MensagemCadastro> {
        if (foto._id) {
            return this.http
                .put(`${this.url}/${foto._id}`, JSON.stringify(foto), {headers: this.headers})
                // .map(() => ({mensagem: 'Foto alterada com sucesso', inclusao: false}))
                .map(() => new MensagemCadastro('Foto alterada com sucesso', false))
        } else {
            return this.http
                .post(this.url, JSON.stringify(foto), {headers: this.headers})
                // .map(() => ({mensagem: 'Foto incluída com sucesso', inclusao: true}))
                .map(() => new MensagemCadastro('Foto incluída com sucesso', true))
        }
    }

    lista (): Observable<FotoComponent[]> {
        return this.http.get(this.url).map(fotos => fotos.json())
    }

    buscarPorId(id): Observable<FotoComponent> {
        return this.http.get(`${this.url}/${id}`).map(foto => foto.json())
    }

    remove (foto: FotoComponent) {
        return this.http.delete(`${this.url}/${foto._id}`)
    }
}

export class MensagemCadastro {
    constructor (private _mensagem: string, private _inclusao: boolean) {
        this._mensagem = _mensagem
        this._inclusao = _inclusao
    }

    get mensagem (): string {
        return this._mensagem
    }

    get inclusao (): boolean {
        return this._inclusao
    }
}
