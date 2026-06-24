const menu = document.querySelector('menu');

function updateMenuBackground() {
  if (!menu) return;
  if (window.scrollY > 0) {
    // Zmieniony kolor na granat pasujący do nowego stylu
    menu.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
  } else {
    menu.style.backgroundColor = 'transparent';
  }
}

window.addEventListener('scroll', updateMenuBackground);
window.addEventListener('DOMContentLoaded', updateMenuBackground);