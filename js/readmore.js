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


const projectImages = {
  sintproedu: [
    "./img/galeria/sintproedu/home.png",
    "./img/galeria/sintproedu/sobre.png",
    "./img/galeria/sintproedu/login.png",
    "./img/galeria/sintproedu/cadastro.png",
    "./img/galeria/sintproedu/cadastroempresa.png",
    "./img/galeria/sintproedu/projetosempresa.png",
    "./img/galeria/sintproedu/projetocadastro.png",
    "./img/galeria/sintproedu/projetoedite.png",
    "./img/galeria/sintproedu/projetoexcluir.png",
    "./img/galeria/sintproedu/mensagensempresa.png",
    "./img/galeria/sintproedu/cadastroaluno.png",
    "./img/galeria/sintproedu/projetosaluno.png",
    "./img/galeria/sintproedu/mensagensenviar.png",
    "./img/galeria/sintproedu/mensagensenviadas.png",

  ],
  projeto2: [
    "./img/projeto2/img1.jpg",
    "./img/projeto2/img2.jpg",
  ],
  projeto3: [
    "./img/projeto3/img1.jpg",
    "./img/projeto3/img2.jpg",
  ],
};

let currentGalleryImages = [];
let currentGalleryIndex = 0;

const galleryModal = document.getElementById('galleryModal');
const galleryImg = document.getElementById('galleryImg');
const closeGalleryBtn = document.getElementById('closeGallery');
const prevGalleryBtn = document.getElementById('prevGallery');
const nextGalleryBtn = document.getElementById('nextGallery');
const openGalleryButtons = document.querySelectorAll('.open-gallery');

const updateGalleryImage = () => {
  galleryImg.src = currentGalleryImages[currentGalleryIndex];
};

// Abrir modal da galeria
openGalleryButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const projectKey = e.target.getAttribute('data-project');
    currentGalleryImages = projectImages[projectKey];
    currentGalleryIndex = 0;
    updateGalleryImage();
    galleryModal.style.display = 'flex';
  });
});

// Fechar modal da galeria
closeGalleryBtn.addEventListener('click', () => {
  galleryModal.style.display = 'none';
});

// Navegar para a imagem anterior
prevGalleryBtn.addEventListener('click', () => {
  currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
  updateGalleryImage();
});

// Navegar para a próxima imagem
nextGalleryBtn.addEventListener('click', () => {
  currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryImages.length;
  updateGalleryImage();
});

// Fechar modal ao clicar fora da imagem
galleryModal.addEventListener('click', (e) => {
  if (e.target === galleryModal) {
    galleryModal.style.display = 'none';
  }
});