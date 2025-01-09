// Seleciona os botões "Ler mais" e "Ler menos"
const readMoreBtn = document.querySelectorAll('.read-more-btn');
const readLessBtn = document.querySelectorAll('.read-less-btn');

// Seleciona os elementos que serão modificados
const dots = document.getElementById("dots");
const moreText = document.getElementById("more");

// Função que alterna o estado do texto
function toggleText(button) {
    const cardBody = button.closest('.card-body');
    const dots = cardBody.querySelector('.dots');
    const moreText = cardBody.querySelector('.more');

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        button.innerHTML = "Recolher";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        button.innerHTML = "Continuar lendo";
        moreText.style.display = "inline";
    }
}

readMoreBtn.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        toggleText(button);
    });
});

readLessBtn.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        toggleText(button);
    });
});


  // Esse código será executado quando o modal for aberto
document.addEventListener('DOMContentLoaded', function() {
  // Adicionar o evento de click para os links de cursos
  const links = document.querySelectorAll('a[data-bs-toggle="modal"]');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      // Pega a URL do certificado
      const certificadoUrl = event.target.getAttribute('data-certificado');

      // Atualiza a imagem no modal
      const modalImage = document.getElementById('certificateImage');
      modalImage.src = certificadoUrl;
    });
  });
});