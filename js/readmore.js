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


document.addEventListener('DOMContentLoaded', () => {
  const courseLinks = document.querySelectorAll('.course-link');
  const certificateIframe = document.getElementById('certificateIframe');

  courseLinks.forEach(link => {
    link.addEventListener('click', function () {
      const pdfUrl = this.getAttribute('data-certificado');
      certificateIframe.src = pdfUrl; // Atualiza o iframe com o PDF selecionado
    });
  });

  // Limpar o iframe ao fechar o modal (opcional, para evitar cache)
  const certificateModal = document.getElementById('certificateModal');
  certificateModal.addEventListener('hidden.bs.modal', () => {
    certificateIframe.src = '';
  });
});
