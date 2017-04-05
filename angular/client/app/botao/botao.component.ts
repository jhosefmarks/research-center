import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: './botao.component.html'
})
export class BotaoComponent {
    @Input() nome: string = 'Ok'
    @Input() estilo: string = 'btn-default'
    @Input() tipo: string = 'btn'
    @Input() desabilitado: boolean = false
    @Input() confirmacao: boolean = false

    @Output() acao = new EventEmitter()

    executaAcao () {
        if (this.confirmacao) {
            if (confirm('Deseja excluir')) {
                this.acao.emit(null)
            }
            return
        }

        this.acao.emit(null)
    }
}
