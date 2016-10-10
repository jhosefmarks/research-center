angular.module('starter')
  .controller('ListagemController', ListagemController);

ListagemController.$inject = ['CarroService'];

function ListagemController(CarroService) {

  var self = this;

  CarroService.obterCarros().then(function(dados){
    self.listaDeCarros = dados;
  });

  /*self.listaDeCarros = [
    {nome: 'BMW 120i', preco: 70000},
    {nome: 'Onix 1.6' , preco: 35000},
    {nome: 'Fiesta 2.0', preco: 52000},
    {nome: 'C3 1.0', preco: 22000},
    {nome: 'Uno Fire', preco: 11000},
    {nome: 'Sentra 2.0', preco: 53000},
    {nome: 'Astra Sedan', preco: 39000},
    {nome: 'Vectra 2.0 Turbo', preco: 37000},
    {nome: 'Hilux 4x4', preco: 90000},
    {nome: 'Montana Cabine dupla', preco: 57000},
    {nome: 'Outlander 2.4' ,preco: 99000},
    {nome: 'Fusca 1500', preco: 6000}
  ];*/
}
