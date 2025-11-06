document.addEventListener('DOMContentLoaded', () => {
  const themes = ['', 'theme-green']; // rojo por defecto y verde
  let currentTheme = 0;

  const switcher = document.getElementById('themeSwitcher');
  const body = document.body;
  const lampara = document.querySelector('.lampara');

  function applyTheme(index) {
    body.classList.remove(...themes.filter(t => t !== ''));
    if (themes[index] !== '') body.classList.add(themes[index]);

    // Lampara encendida/apagada
    if (index === 1) lampara.classList.add('apagada'); // verde → apagada
    else lampara.classList.remove('apagada');          // rojo → encendida
  }

  if (switcher) {
    const changeTheme = (e) => {
      e.preventDefault();
      currentTheme = (currentTheme + 1) % themes.length;
      applyTheme(currentTheme);
    };

    switcher.addEventListener('click', changeTheme);
    switcher.addEventListener('touchend', changeTheme); // soporte móvil
  }

  applyTheme(currentTheme);

  // ---------------- LIGHTBOX ----------------
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');

  // CORRECCIÓN: usar '.galeria img' en vez de '.gallery img'
  document.querySelectorAll('.galeria img').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});
// ----- VER MÁS / VER MENOS -----
document.addEventListener('DOMContentLoaded', () => {
  const verMasBtn = document.getElementById('verMasBtn');
  const galeriaExtendida = document.getElementById('galeriaExtendida');

  if (verMasBtn && galeriaExtendida) {
    verMasBtn.addEventListener('click', () => {
      const visible = galeriaExtendida.style.display === 'block';
      galeriaExtendida.style.display = visible ? 'none' : 'block';
      verMasBtn.textContent = visible ? 'Ver más' : 'Ver menos';
    });
  }
});
// ----- LIGHTBOX ACTORES -----
const lightboxActores = document.getElementById('lightbox-actores');
const lightboxImgActores = document.getElementById('lightbox-img-actores');
const closeActores = document.querySelector('.close-actores');

document.querySelectorAll('.actor img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxActores.style.display = 'flex';
    lightboxImgActores.src = img.src;
  });
});

// Cerrar al click en la X
closeActores.addEventListener('click', () => {
  lightboxActores.style.display = 'none';
});

// Cerrar al click fuera de la imagen
lightboxActores.addEventListener('click', (e) => {
  if (e.target === lightboxActores) {
    lightboxActores.style.display = 'none';
  }
});

let currentImageIndex = 0;
let images = [];

function openModal(element) {
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("modalImage");
  images = Array.from(document.querySelectorAll(".gallery-img"));
  currentImageIndex = images.indexOf(element);

  modal.style.display = "block";
  modalImg.src = element.src;
}

function closeModal() {
  document.getElementById("galleryModal").style.display = "none";
}

function changeImage(direction) {
  currentImageIndex += direction;

  if (currentImageIndex >= images.length) currentImageIndex = 0;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;

  const modalImg = document.getElementById("modalImage");
  modalImg.src = images[currentImageIndex].src;
}

// Navegación con teclado
document.addEventListener("keydown", (event) => {
  const modal = document.getElementById("galleryModal");
  if (modal.style.display === "block") {
    if (event.key === "ArrowRight") changeImage(1);
    if (event.key === "ArrowLeft") changeImage(-1);
    if (event.key === "Escape") closeModal();
  }
});



