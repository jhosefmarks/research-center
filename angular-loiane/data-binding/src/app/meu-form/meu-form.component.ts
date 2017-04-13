import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  valorAtual: string = '';
  valorSalvo: string = '';

  nome: string = 'abc';

  pessoa: any = {
    nome:  'def',
    idade: 21
  };

  constructor() { }

  ngOnInit() {
  }

  onKeyUp (event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor (valor) {
    this.valorSalvo = valor;
  }
}
