const btn = document.getElementById('botao-enviar');
const form = document.getElementById('form-contatos');

const iniLink = document.getElementById('nav-inicio');
const mensagemLink = document.getElementById('nav-mensagem');
const itensLink = document.getElementById('nav-itens');
const qrcodesLink = document.getElementById('nav-qrcodes');
const dadosentregaLink = document.getElementById('nav-dados-entrega');

const mensagemSection = document.getElementById('formulario-contato');
const itensSection = document.getElementById('itens-lista');
const qrcodeSection = document.getElementById('qrcodes');
const dadosentregaSection = document.getElementById('dadosentrega');

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

iniLink.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

mensagemLink.addEventListener('click', () => {
    mensagemSection.scrollIntoView({
        behavior: 'smooth'
    });
});

itensLink.addEventListener('click', () => {
    itensSection.scrollIntoView({
        behavior: 'smooth'
    });
});

qrcodesLink.addEventListener('click', () => {
    qrcodeSection.scrollIntoView({
        behavior: 'smooth'
    });
});

dadosentregaLink.addEventListener('click', () => {
    dadosentregaSection.scrollIntoView({
        behavior: 'smooth'
    });
});
