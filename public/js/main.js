$(document).ready(function() {
  $('form').submit(event => {
    verificarLogin(event);
  });
});

function verificarLogin(event) {
  event.preventDefault();

  // Pegando os valores do form
  const dados = $('form').serializeArray();
  console.log(dados);

  const url =
    'http://localhost/autenticacao-prova-dw/requests/verificaLogin.php';
  $.post(
    url,
    {
      user: dados.find(dado => dado.name === 'email').value,
      pass: dados.find(dado => dado.name === 'password').value
    },
    function(data) {
      const exists = JSON.parse(data);

      if (exists) {
          $('#success').fadeIn();
          setTimeout(() => {
              $('#success').fadeOut();
            }, 3000);
        } else {
            $('#danger').fadeIn();
            setTimeout(() => {
              $('#danger').fadeOut();
            }, 3000);
      }
    }
  );
}
