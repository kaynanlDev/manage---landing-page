// seleção de elementos
const menuMobile = document.querySelector(".menu-mobile")
const btnHamburguer = document.querySelector(".menu-h")
const imgHamburguer = document.querySelector(".hamburguer")
const body = document.querySelector('.body')
btnHamburguer.addEventListener('click', () =>{
    
    if(menuMobile.classList.contains('active')){
        menuMobile.classList.remove('active')
        imgHamburguer.src = './images/icon-hamburger.svg'
    }
    else{
        menuMobile.classList.add('active')
        imgHamburguer.src = './images/icon-close.svg'

    }
})

console.log(menuMobile, btnHamburguer, imgHamburguer)
