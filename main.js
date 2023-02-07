var navbarEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu');
var menuHabIcon = document.querySelector('.menu');
var mobileMenu = document.querySelector('.mobile-menu')

navbarEmail.addEventListener('click', toggleMenu); 
menuHabIcon.addEventListener('click', toggleMobileMenu); 

function toggleMenu() {
    
    // SOLUCION DE NICOLAS
    //
    // if(desktopMenu.getAttribute('class') == "desktop-menu inactive") {
    //     desktopMenu.setAttribute('class', 'desktop-menu');
    // } else {
    //     desktopMenu.setAttribute('class', 'desktop-menu inactive');
    // }

    desktopMenu.classList.toggle('inactive') 
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive') 
}
