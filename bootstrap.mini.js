// Função para validar o formulário antes de enviar
function validarFormulario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;

  // Validação simples para garantir que os campos não estão vazios
  if (!nome || !email || !telefone) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return false;
  }
  
  // Validação de formato de telefone (exemplo simples)
  const telefoneRegex = /^\+244\s\d{9}$/;
  if (!telefoneRegex.test(telefone)) {
    alert("Por favor, insira um telefone no formato (+244) 926011929");
    return false;
  }

  // Se passou pela validação, exibe mensagem de sucesso
  alert("Formulário enviado com sucesso!");
  return true;
}