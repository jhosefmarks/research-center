import { Component, Input, ViewEncapsulation } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: [ './foto.component.css' ]
})
export class FotoComponent {
    _id: string
    @Input() titulo: string
    @Input() url: string
    descricao: string
}
