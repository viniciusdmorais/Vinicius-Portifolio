const btn = document.getElementById('botao-enviar');

document.getElementById('form-contatos')
    .addEventListener('submit', function (event) {

        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_n0cls0k';
        const templateID = 'template_mo8fjgi';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
            
    });
