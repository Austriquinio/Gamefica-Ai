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

const selecionarSlide = (indiceSlide) => {
    slides.forEach( slide => banner.classList.remove(slide))

    banner.classList.add(slides[indiceSlide]) 

}

let listaCases = [
    {
        imagem: "https://unsplash.it/600/400?image=40",
        descricao: "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionários devem propor e implementar ideias"
    },
    {
        imagem: "https://unsplash.it/600/400?image=41",
        descricao: "Um empresa de consultoria cria uma narrativa interativa bla bla bla bla o professor tirou o texto, fiz o L."
    },
    {
        imagem: "https://unsplash.it/600/400?image=43",
        descricao: "Um empresa de vendas implementa uma competição gamificada entre equipes que competem pelo topo do ranking"
    },
    {
        imagem: "https://unsplash.it/600/400?image=44",
        descricao: "Uma empresa de saúde promove o bem-estar dos funcionários através"
    },
]

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    let template = ""

    listaCases.forEach( cardCase => {
        template += `<div class="card">
        <img src="${cardCase.imagem}" alt="">
        <p>${cardCase.descricao}</p>
        <button>Ver mais</button>
    </div>`
    })

    elementoLista.innerHTML = template
}
