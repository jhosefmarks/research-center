angular.module('starter')
  .controller('CarroEscolhidoController', CarroEscolhidoController);

CarroEscolhidoController.$inject = ['$stateParams'];

function CarroEscolhidoController ($stateParams) {
  var self = this;

  self.carroEscolhido = angular.fromJson($stateParams.carro);

  self.listaDeAcessorios = [
    {nome: 'Freio ABS', preco: 800},
    {nome: 'Ar-condicionado', preco: 1000},
    {nome: 'MP3 Player', preco: 500}
  ];

  self.mudou = function (acessorio, isMarcado) {
    if (isMarcado) {
      self.carroEscolhido.preco =
        self.carroEscolhido.preco + acessorio.preco;
    } else {
      self.carroEscolhido.preco =
        self.carroEscolhido.preco - acessorio.preco;
    }
  }
}

