// Quando o documento estiver pronto
$(document).ready(function() {
  // Efeito de exibição da mensagem após o envio
  $("form").submit(function(event) {
    event.preventDefault(); // Impede o envio do formulário real

    // Validação do formulário usando a função de JavaScript
    if (validarFormulario()) {
      // Exibe uma mensagem de sucesso
      $("body").append('<div class="alert alert-success">Formulário enviado com sucesso!</div>');

      // Remove a mensagem após 3 segundos
      $(".alert").fadeOut(3000, function() {
        $(this).remove();
      });

      // Limpar o formulário
      $("form")[0].reset();
    }
  });

  // Exemplo de efeito: Quando o usuário passa o mouse sobre o botão, muda a cor
  $("button").hover(
    function() {
      $(this).css("background-color", "#0056b3");
    },
    function() {
      $(this).css("background-color", "#007bff");
    }
  );
});