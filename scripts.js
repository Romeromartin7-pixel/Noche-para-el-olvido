// Solo dos temas: rojo y verde
const themes = ['','theme-green']; // '' = tema por defecto (ladrillo rojo)
let currentTheme = 0;

const switcher = document.getElementById('themeSwitcher');
const body = document.body;

// Aplica un tema según el índice actual
function applyTheme(index) {
  body.classList.remove(...themes);
  if(themes[index] !== '') {
    body.classList.add(themes[index]);
  }
}

// Cambia de tema al hacer clic en el botón
switcher.addEventListener('click', () => {
  currentTheme = (currentTheme + 1) % themes.length;
  applyTheme(currentTheme);
});

// Aplica el tema inicial
applyTheme(currentTheme);
