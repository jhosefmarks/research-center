import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'] /*
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
  */
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://jhosefmarks.training';
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';
  cursoAngular: boolean = true;

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;

  constructor() { }

  ngOnInit() {
  }

  getValor () {
    return 1;
  }

  getCurtirCurso () {
    return true;
  }

  botaoClicado () {
    alert('Botão clicado!')
  }

  onMouseOverOut () {
    this.isMouseOver = !this.isMouseOver;
  } 

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }
}
