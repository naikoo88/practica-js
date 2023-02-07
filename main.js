var navbarEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu')

navbarEmail.addEventListener('click', toggleMenu);

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

