angular.module('starter')
  .controller('FinalizarPedidoController', FinalizarPedidoController);

FinalizarPedidoController.$inject = ['$stateParams', '$ionicPopup', '$state', 'CarroService'];

function FinalizarPedidoController ($stateParams, $ionicPopup, $state, CarroService) {
  var self = this;

  self.pedido = {};

  self.carroFinalizado = angular.fromJson($stateParams.carroEscolhido);

  self.finalizarPedido = function () {
    var pedidoFinalizado = {
      params: {
        carro: self.carroFinalizado.nome,
        preco: self.carroFinalizado.preco,
        nome: self.pedido.nome,
        endereco: self.pedido.endereco,
        email: self.pedido.email
      }
    };

    CarroService.salvarPedido(pedidoFinalizado).then(function (dados) {
      $ionicPopup.alert({
        title: 'Parabéns',
        template: 'Você acaba de comprar um carro.'
      }).then(function () {
        $state.go('listagem');
      }, function(erro) {
        $ionicPopup.alert({
          title: 'Deu erro',
          template: 'Campos obrigatórios'
        })
      });
    });
  }
}
