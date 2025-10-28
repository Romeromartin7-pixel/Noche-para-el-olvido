document.addEventListener('DOMContentLoaded', () => {
  const themes = ['', 'theme-green']; // '' = tema rojo por defecto
  let currentTheme = 0;
  const switcher = document.getElementById('themeSwitcher');
  const body = document.body;

  function applyTheme(index) {
    body.classList.remove(...themes);
    if(themes[index] !== '') body.classList.add(themes[index]);
  }

  switcher.addEventListener('click', () => {
    currentTheme = (currentTheme + 1) % themes.length;
    applyTheme(currentTheme);
  });

  applyTheme(currentTheme);
});
