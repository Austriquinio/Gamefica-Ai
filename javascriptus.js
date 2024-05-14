// let menu = document.querySelector("#menu")
let menu = document.getElementById("menu")
let iconeBarra = document.getElementById("iconeBarra")
let iconeX = document.getElementById("iconeX")

function abrirFecharMenu(){
    //  se o menu esta fechado
    if (menu.classList.contains("menu-fechado")){
        // Abrir o menu
        menu.classList.remove("menu-fechado")

        // Mostra icone x
        iconeX.style.display = "unset"

        // Esconder icone barras
        iconeBarra.style.display = "none"
    } 
    else {
        // Fechar o menu
        menu.classList.add("menu-fechado")

        // Mostra icone x
        iconeX.style.display = "none"

        // Esconder icone barras
        iconeBarra.style.display = "unset"
    }
}   

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarra.style.display = "none"
}

// Função Carrosel

let slides = [
    'primeiro-banner',
    'segundo-banner' ,
    'terceiro-banner'
]


// essa variavel pode ser usada pra dar um numero limite de slides
// let ultimoItem = 3

let slidesAtual = 0

let numeroSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slidesAtual])

const mostraProximoSlide = () => {

    banner.classList.remove(slides[slidesAtual])

    if(slidesAtual < (numeroSlides - 1)) {
        slidesAtual++
    } else {
        slidesAtual = 0
    }

    banner.classList.add(slides[slidesAtual])
}

const mostraSlideAnterior = () => {
    // Remove slide anterior    
    banner.classList.remove(slides[slidesAtual])

    if(slidesAtual > 0) {
        slidesAtual--
    }else {
        slidesAtual = numeroSlides - 1
    }

    // Renderiza o slideAtual
    banner.classList.add(slides[slidesAtual])
}