document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.querySelector(".navbar__menu");
    const mainContent = document.querySelector(".main"); // Pobranie głównej zawartości

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("open");
        mainContent.classList.toggle("blur"); // Dodanie/Usunięcie efektu blur
    });
});
