/* mobile navigation button opening */


function menu(){
const menuButton = document.querySelector(".menu-button");
const navigationBar = document.querySelector("nav");
const mobileNavigationMenu = document.querySelector(".nav-wrapper");
const menuIcon = document.querySelector("#menu_icon");
visibility = mobileNavigationMenu.getAttribute("data-type");

if(visibility === "shown"){
    mobileNavigationMenu.setAttribute("data-type", "hidden");
    menuIcon.innerHTML = "menu";
    /* navigationBar.style = "position:sticky"; */
}

if(visibility === "hidden"){
    mobileNavigationMenu.setAttribute("data-type", "shown");
    menuIcon.innerHTML = "close";
    /* navigationBar.style = "position:unset"; */
}

}