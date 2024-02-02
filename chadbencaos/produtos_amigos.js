// Aguarda até que o DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function () {
    // Obtém uma referência à div onde os produtos serão inseridos
    const productListContainer = document.getElementById("itens-lista");

    // Faz uma requisição para obter o conteúdo do arquivo JSON
    fetch("produtos_amigos.json")
        .then(response => response.json())
        .then(data => {
            // Para cada produto no JSON, cria uma div e insere no contêiner
            data.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.className = "product-item";

                const img = document.createElement("img");
                img.src = product.imgSrc;
                img.alt = product.alt;

                const title = document.createElement("p");
                title.textContent = product.title;

                productDiv.appendChild(img);
                productDiv.appendChild(title);

                // Se houver uma descrição, adiciona um parágrafo com a descrição
                if (product.description) {
                    const description = document.createElement("p");
                    description.textContent = product.description;
                    productDiv.appendChild(description);
                }

                productListContainer.appendChild(productDiv);
            });
        })
        .catch(error => console.error("Erro ao carregar produtos:", error));
});