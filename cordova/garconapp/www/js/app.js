$('.modal-trigger').leanModal();

$('.collection-item').on('click', function() {
  var $badge = $('.badge', this);

  if ($badge.length === 0) {
    $badge = $('<span class="badge brown-text">1</span>')
      .appendTo(this);
  } else {
    $badge.text(parseInt($badge.text()) + 1);
  }

  var nomeProduto = this.firstChild.textContent;
  Materialize.toast(nomeProduto + ' adicionado', 1000);
});

$('.collection').on('click', '.badge', function() {
    $(this).remove();
    return false;
})

$('#confirmar').on('click', function() {
    var texto = "";

    $('.badge').parent().each(function(){
        texto += this.firstChild.textContent + ': ';
        texto += this.lastChild.textContent + ', ';
    });

    $('#resumo').empty().text(texto);
});

$('.acao-limpar').on('click', function() {
    $('#numero-mesa').val('');
    $('.badge').remove();
});

$('.scan-qrcode').click(function(){
    cordova.plugins.barcodeScanner.scan(function (result){
        if (resultado.text) {
            Materialize.toast('Mesa ' + resultado.text, 2000);
            $('#numero-mesa').val(resultado.text);
        }
    },
    function(erro) {
      Materialize.toast('Erro ' + erro, 2000, 'red-text');
    });
});

$('.acao-finalizar').click(function(){
    $.ajax({
        url: 'http://cozinhapp.sergiolopes.org/novo-pedido',
        data: {
            mesa: $('#numero-mesa').val(),
            pedido: $('#resumo').text()
        },
        success: function(resposta) {
            Materialize.toast(resposta, 2000);

            $('#numero-mesa').val('');
            $('.badge').remove();
        },
        error: function(erro) {
            Materialize.toast(erro.responseText, 3000, `red-text`);
        }
    })
  });
