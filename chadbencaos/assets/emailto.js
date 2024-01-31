const btn = document.getElementById('botao-enviar');
const form = document.getElementById('form-contatos');

document.getElementById('form-contatos')
    .addEventListener('submit', function (event) {

        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'service_n0cls0k';
        const templateID = 'template_mo8fjgi';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Mensagem enviada!');                
                 // Limpar os campos do formulário
                form.reset();
                alert('Agora, confira a sugestão de presentes')
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
                // Limpar os campos do formulário
                form.reset();
            });
            
    });
