let darkMode = true;
const toggleTheme = document.querySelector('#toggle-theme');

toggleTheme.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light');

  const mode = darkMode ? 'Light' : 'Dark';
  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`;

  darkMode = !darkMode;
})