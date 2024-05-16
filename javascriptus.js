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

let listaCases = []
    


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

const carregarCases = () => {
    fetch("http://localhost:3000/cases")
    .then( resposta => resposta.json() )
    .then( (dados) => {
        listaCases = dados;
        renderizarCases()
    })
    .catch(erro => console.error(erro))
}

const solicitarOrcamento = () => {
    // Pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    console.log(valorNome);
    console.log(valorEmail);
    console.log(valorDescricao);

    // Organizar objetos com os valores

    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }
    // Enviar requisição para a API 
    fetch("https//127.0.0.1:3000/solicitacoes" {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => resposta.json(resposta))
    .catch(erro => console.erro(erro))
        // Limpar os campos
        // Mostrar alert com msg de sucesso
        // CASO ERRO - alertar com msg de erro
}