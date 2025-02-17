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
    whatsappButton.href = "https://wa.me/+5561984291124?text=Ol%C3%A1%20wreletronica%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!!!"; // Número atualizado
    whatsappButton.className = "whatsapp-button";
    whatsappButton.target = "_blank";
    whatsappButton.innerHTML = "🖊"; // Ícone do WhatsApp

    document.body.appendChild(whatsappButton);
});
