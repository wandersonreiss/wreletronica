// Form Submission
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            form.reset();
        } else {
            alert('Erro ao enviar mensagem. Tente novamente.');
        }
    } catch (error) {
        alert('Erro de conexão. Verifique sua internet.');
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Configuração específica do Formspree
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;

    try {
        // Mostrar loading
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitButton.disabled = true;

        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // Sucesso
            form.reset();
            Swal.fire({
                icon: 'success',
                title: 'Mensagem enviada!',
                text: 'Retornaremos em até 24 horas',
                confirmButtonColor: '#3498db'
            });
        } else {
            throw new Error('Erro no servidor');
        }
    } catch (error) {
        // Erro
        Swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: 'Erro ao enviar, tente novamente mais tarde',
            confirmButtonColor: '#e74c3c'
        });
    } finally {
        // Restaurar botão
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    }
});
// Adicione este polyfill no <head> para forms antigos
<script src="https://cdn.jsdelivr.net/npm/formdata-polyfill"></script>
