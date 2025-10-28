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
});
