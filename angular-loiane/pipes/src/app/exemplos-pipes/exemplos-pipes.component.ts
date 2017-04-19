import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Aprenda algoritmos e estrutura de dados com JavaScript',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  }

  filtro: string;

  livros: string[] = ['Angular', 'JavaScript'];

  constructor() { }

  ngOnInit() {
  }

  addCurso(livro) {
    console.log("livro adicionado: ", livro);
    this.livros.push(livro);
  }

  obterCursos() {
    let filter;

    if (this.livros.length === 0 || !this.filtro) {
      return this.livros;
    }

    return this.livros.filter(
      v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase()));
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  })

  valorAsync2 = Observable.interval(2000).map(valor => 'Valor assíncrono 2');

}
