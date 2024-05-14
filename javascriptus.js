// let menu = document.querySelector("#menu")
let menu = document.getElementById("menu")

function abrirFecharMenu(){
    //  se o menu esta fechado
    if (menu.classList.contains("menu-fechado")){
        // Abrir o menu
        menu.classList.remove("menu-fechado")
    } 
    else {
        // Fechar o menu
        menu.classList.add("menu-fechado")
    }
}   