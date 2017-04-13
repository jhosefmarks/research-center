import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://jhosefmarks.training';
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';
  cursoAngular: boolean = true;

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

  onKeyUp (event) {
    alert("sei lá")
  }
}
