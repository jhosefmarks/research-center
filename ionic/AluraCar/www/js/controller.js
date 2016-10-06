angular.module('starter')
  .controller('ListagemController', ListagemController);

ListagemController.$inject = [];

function ListagemController() {

  var self = this;

  self.listaDeCarros = [
    'BMW 120i', 'Onix 1.6', 'Fiesta 2.0', 'C3 1.0', 'Uno Fire',
    'Sentra 2.0', 'Vectra 2.0 Turbo', 'Hilux 4X4', 'Montana Cabine Dupla',
    'Outlander 2.4','Fusca 1500'
  ];

}
