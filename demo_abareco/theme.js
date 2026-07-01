let theme = 'light';

const updateTheme = e => {
  if (e.matches) {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    theme = 'dark';
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    theme = 'light';
  }
  localStorage.setItem('theme', theme);
};

const lightModeButton = document.querySelector('.light-button');
const darkModeButton = document.querySelector('.dark-button');

lightModeButton.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
  document.body.classList.add('light-mode');
  theme = 'light';
  localStorage.setItem('theme', theme);
});

darkModeButton.addEventListener('click', () => {
  document.body.classList.remove('light-mode');
  document.body.classList.add('dark-mode');
  theme = 'dark';
  localStorage.setItem('theme', theme);
});

if (localStorage.getItem('theme')) {
  theme = localStorage.getItem('theme');
  document.body.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');
} else {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  updateTheme(mediaQuery);
  mediaQuery.addEventListener('change', updateTheme);
}
