document.addEventListener('DOMContentLoaded', () => {
  const themes = ['', 'theme-green']; // fondo rojo por defecto y verde alternativo
  let currentTheme = 0;

  const switcher = document.getElementById('themeSwitcher');
  const body = document.body;

  function applyTheme(index) {
    body.classList.remove(...themes.filter(t => t !== ''));
    if (themes[index] !== '') {
      body.classList.add(themes[index]);
    }
  }

  if (switcher) {
    const changeTheme = () => {
      currentTheme = (currentTheme + 1) % themes.length;
      applyTheme(currentTheme);
    };

    switcher.addEventListener('click', changeTheme);
    switcher.addEventListener('touchstart', changeTheme); // soporte móvil
  }

  applyTheme(currentTheme);
});
