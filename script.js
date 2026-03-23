// CAPTURANDO O FORMULÁRIO
const form = document.getElementById("form");

// Evento ao enviar o formulário
form.addEventListener("submit", function(e) {

    // Impede o envio padrão (recarregar página)
    e.preventDefault();

    // CAPTURANDO VALORES
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // VALIDAÇÃO DE CAMPOS VAZIOS
    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // VALIDAÇÃO DE EMAIL
    if (!validarEmail(email)) {
        alert("Digite um email válido!");
        return;
    }

    // SUCESSO
    alert("Mensagem enviada com sucesso!");

    // Limpa o formulário
    form.reset();
});


// FUNÇÃO PARA VALIDAR EMAIL
function validarEmail(email) {
    // Expressão simples para validar email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}