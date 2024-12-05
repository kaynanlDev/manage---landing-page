// seleção de elementos
const menuMobile = document.querySelector(".menu-mobile")
const btnHamburguer = document.querySelector(".menu-h")
const imgHamburguer = document.querySelector(".hamburguer")
const body = document.querySelector('.body')
const form = document.querySelector('#form-footer')
const formInput = document.querySelector('#form-text')
const btnForm = document.querySelector('#form-btn')
const msg = document.querySelector('.mensagem')
// funções

function validEmail(email){
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
}

// eventos
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


form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const email = formInput.value

    if(validEmail(email)){
        msg.innerHTML = 'Enviado com sucesso!'
        msg.style.color = 'green'
    
    } else{
        msg.innerHTML = 'Ops! Email inválido!'
        msg.style.color = 'red'
        return false
    }
})
