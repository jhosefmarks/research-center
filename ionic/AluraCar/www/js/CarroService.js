angular.module('starter')
  .service('CarroService', CarroService);

CarroService.$inject = ['$http'];

function CarroService ($http) {
  var url = 'https://aluracar.herokuapp.com/';

  return {
    obterCarros: function () {
      return $http.get(url).then(function (response) {
        return response.data;
      });
    },
    salvarPedido: function (pedido) {
      return $http.post(url + 'salvarPedido', pedido).then(function (response) {
        return 'Deu certo.';
      });
    }
  }
}
