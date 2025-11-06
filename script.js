const contactForm = document.querySelector('.contact-form');
const submitButton = document.querySelector('.contact-form .btn');
const formActionUrl = contactForm.action;

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        const formData = new FormData(contactForm);
        try {
            const response = await fetch(formActionUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json' 
                }
            });
            if (response.ok) {
                contactForm.reset();
                submitButton.textContent = 'Enviado com Sucesso!';
                setTimeout(() => {
                    submitButton.textContent = 'Submit';
                    submitButton.disabled = false;
                }, 4000);
            } else {
                alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
                submitButton.textContent = 'Falha no Envio';
                submitButton.disabled = false;
            }
        } catch (error) {
            console.error('Erro de rede:', error);
            alert('Erro de conexão. Verifique sua rede e tente novamente.');
            submitButton.textContent = 'Submit';
            submitButton.disabled = false;
        }
    });
}