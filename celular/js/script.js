let currentIndex = 0;
const interval = 5000; // 3 segundos

function showImage(index) {
    const carousel = document.querySelector('.carousel');
    const imageSize = '250'/*document.querySelector('img').width;*/
    carousel.style.transform = `translateX(-${index * imageSize}px)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel img').length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + document.querySelectorAll('.carousel img').length) % document.querySelectorAll('.carousel img').length;
    showImage(currentIndex);
}

// Iniciar o carrossel automaticamente
setInterval(nextImage, interval);




// Função para enviar mensagem via WhatsApp
function sendWhatsApp() {
    window.open("https://wa.me/16991613665", "_blank");
}

// Função para enviar e-mail
function sendEmail() {
    window.location.href = "mailto:viny0012@gmail.com";
}

// Função para abrir o link do OLX
function sendOlx() {
    window.open("https://sp.olx.com.br/regiao-de-ribeirao-preto/celulares/redmi-note-8-xiaomi-excelente-estado-como-novo-1252393106?", "_blank");
}


