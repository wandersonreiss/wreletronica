document.addEventListener("DOMContentLoaded", function() {
    console.log("Site carregado!");

    // Validação do formulário
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Mensagem enviada com sucesso!");
            form.reset();
        });
    }

    // Botão do WhatsApp
    const whatsappButton = document.createElement("a");
    whatsappButton.href = "https://w.app/eletronicawr"; // Número atualizado
    whatsappButton.className = "whatsapp-button";
    whatsappButton.target = "_blank";
    whatsappButton.innerHTML = "🖊"; // Ícone do WhatsApp

    document.body.appendChild(whatsappButton);
});
