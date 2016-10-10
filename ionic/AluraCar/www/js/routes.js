angular.module('starter')
.config(function ($httpProvider, $stateProvider, $urlRouterProvider) {

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

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
