angular.module('starter')
.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {

  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};

  $stateProvider.state('listagem', {
    url: '/listagem',
    templateUrl: 'templates/listagem.html',
    controller: 'ListagemController',
    controllerAs: 'controller'
  })

  .state('carroescolhido', {
    url: '/carroescolhido/:carro',
    templateUrl: 'templates/carroescolhido.html',
    controller: 'CarroEscolhidoController',
    controllerAs: 'controller'
  })

  .state('finalizarpedido',{
    url: '/finalizarpedido/:carroEscolhido',
    templateUrl: 'templates/finalizarpedido.html',
    controller: 'FinalizarPedidoController',
    controllerAs: 'controller'
  });

  $urlRouterProvider.otherwise('listagem');
})
