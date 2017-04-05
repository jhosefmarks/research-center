import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FotoComponent } from '../foto/foto.component'
import { FotoService } from '../foto/foto.service'

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    route: ActivatedRoute
    router: Router
    service: FotoService
    foto: FotoComponent = new FotoComponent ()
    meuForm: FormGroup
    mensagem: string = ''

    constructor (service: FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router) {
        this.route = route
        this.router = router
        this.service = service

        this.meuForm = fb.group({
            titulo: ['', Validators.compose([
                Validators.required, Validators.minLength(4)
            ])],
            url: ['', Validators.required],
            descricao: ['']
        })

        this.route.params.subscribe(params => {
            let id = params['id']

            if (id) {
                this.service
                    .buscarPorId(id)
                    .subscribe(foto => this.foto = foto, err => console.log(err))
            }
        })
    }

    cadastrar (event) {
        event.preventDefault()

        this.service
            .cadastra(this.foto)
            .subscribe(res => {
                this.mensagem = res.mensagem
                this.foto = new FotoComponent()

                if (!res.inclusao) {
                    this.router.navigate([''])
                }
            },
            err => console.log(err))
    }
}
