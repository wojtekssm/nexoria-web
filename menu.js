const menu = document.querySelector('menu');

function updateMenuBackground() {
  if (!menu) return;
  if (window.scrollY > 0) {
    menu.style.backgroundColor = 'black';
  } else {
    menu.style.backgroundColor = 'transparent';
  }
}

window.addEventListener('scroll', updateMenuBackground);
window.addEventListener('DOMContentLoaded', updateMenuBackground);