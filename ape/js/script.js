// Função para abrir o modal e exibir a imagem em tamanho maior
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const roomImages = document.querySelectorAll('.enlarge');

roomImages.forEach((roomImage) => {
    roomImage.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImage.src = this.src;
    });
});

// Função para fechar o modal
const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
