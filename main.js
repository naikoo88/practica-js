var navbarEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu');
var menuHabIcon = document.querySelector('.menu');
var mobileMenu = document.querySelector('.mobile-menu')
var menuCartIcon = document.querySelector('.navbar-shopping-cart');
var productDet = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleMenu); 
menuHabIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleProductMenu);

var isMobileMenuClose = mobileMenu.classList.contains('inactive');




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
    let isProductDetClose = productDet.classList.contains('inactive');
    if(isProductDetClose){
        mobileMenu.classList.toggle('inactive')    
    } else {
        productDet.classList.toggle('inactive')
        mobileMenu.classList.toggle('inactive')    
    }
}

function toggleProductMenu() {
    let isMobileMenuClose = mobileMenu.classList.contains('inactive');
    if(isMobileMenuClose){
        productDet.classList.toggle('inactive')    
    } else {
        mobileMenu.classList.toggle('inactive')
        productDet.classList.toggle('inactive')    
    }
}
