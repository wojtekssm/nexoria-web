// 1. Obsługa tła dla panelu nawigacyjnego podczas scrollowania
const navbar = document.getElementById('navbar');

function updateNavbar() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', updateNavbar);
window.addEventListener('DOMContentLoaded', updateNavbar);

// 2. Obsługa Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Otwieranie/Zamykanie po kliknięciu w hamburger
hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Zapobiega natychmiastowemu wywołaniu zamknięcia przez kliknięcie w document
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Automatyczne chowanie menu bocznego po kliknięciu w jakikolwiek link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Zamykanie menu po kliknięciu poza obszar menu i hamburgera
document.addEventListener('click', (e) => {
    // Sprawdzamy, czy menu jest otwarte oraz czy kliknięcie nastąpiło POZA menu i POZA hamburgerem
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// 3. Obsługa "wyskakujących kart" ze scrollowaniem (Scroll Reveal)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); 
            observer.unobserve(entry.target);      
        }
    });
}, observerOptions);

const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));