// Espera a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
  // Temas disponibles: '' = fondo rojo por defecto, 'theme-green' = ladrillo luz verde
  const themes = ['', 'theme-green'];
  let currentTheme = 0;

  const switcher = document.getElementById('themeSwitcher');
  const body = document.body;

  // Función para aplicar un tema según índice
  function applyTheme(index) {
    body.classList.remove(...themes); // elimina todas las clases de tema
    if (themes[index] !== '') {
      body.classList.add(themes[index]); // agrega clase si no es el tema por defecto
    }
  }

  // Cambia de tema al hacer clic en el botón
  switcher.addEventListener('click', () => {
    currentTheme = (currentTheme + 1) % themes.length;
    applyTheme(currentTheme);
  });

  // Aplica el tema inicial
  applyTheme(currentTheme);
});
