var navbarEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu');
var menuHabIcon = document.querySelector('.menu');
var mobileMenu = document.querySelector('.mobile-menu')
var menuCartIcon = document.querySelector('.navbar-shopping-cart');
var productDet = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleMenu); 
menuHabIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleProductMenu);


function toggleMenu() {
    // SOLUCION DE NICOLAS
    //
    // if(desktopMenu.getAttribute('class') == "desktop-menu inactive") {
    //     desktopMenu.setAttribute('class', 'desktop-menu');
    // } else {
    //     desktopMenu.setAttribute('class', 'desktop-menu inactive');
    // }
    let isProductDetClose = productDet.classList.contains('inactive');
    if(isProductDetClose){
        desktopMenu.classList.toggle('inactive')    
    } else {
        productDet.classList.toggle('inactive')
        desktopMenu.classList.toggle('inactive')     }   
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
    let isMenuClose = desktopMenu.classList.contains('inactive');


    if(isMobileMenuClose && isMenuClose){
        productDet.classList.toggle('inactive')    
    } else if(isMobileMenuClose){
        desktopMenu.classList.toggle('inactive')
        productDet.classList.toggle('inactive') 
    } else {
        mobileMenu.classList.toggle('inactive')
        productDet.classList.toggle('inactive')    
    }
}

let productsList = [];
productsList.push({
    name: 'bici',
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 150,
    icon:'./icons/bt_add_to_cart.svg'
});
productsList.push({
    name: 'bici',
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 150,
    icon:'./icons/bt_add_to_cart.svg'
});
productsList.push({
    name: 'bici',
    img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 150,
    icon:'./icons/bt_add_to_cart.svg'
});


function listArr(arr){
    for (product of arr){
        let productCard = document.createElement('div');
        let img = document.createElement('img');
        let productInfo = document.createElement('div');
        let dataInfo = document.createElement('div');
        let price = document.createElement('p');
        let name = document.createElement('p');
        let figure = document.createElement('figure');
        let icon = document.createElement('img');

        productCard.classList.add('product-card');
        productInfo.classList.add('product-info');

        productCard.appendChild(img);
        productCard.appendChild(productInfo);
        productInfo.appendChild(dataInfo);
        productInfo.appendChild(figure);
        dataInfo.appendChild(price);
        dataInfo.appendChild(name);
        figure.appendChild(icon)

        img.setAttribute('src', product.img);
        price.innerText = '$' + product.price;
        name.innerText = product.name;
        icon.setAttribute('src', product.icon);

        let productsContainer = document.querySelector('.cards-container');
        productsContainer.appendChild(productCard);
    }
}

listArr(productsList);


