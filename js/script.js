// Ativar links do menu

const links = document.querySelectorAll(".header-menu a");

function ativarlink (link) {
    const url = location.href;
    const href = link.href;


    if (url.includes(href)){
        link.classList.add("ativo");
    }
}

links.forEach(ativarlink);

// Links do orçamento

const parametros = new URLSearchParams( location.search);

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);
    
    if(elemento){
        elemento.checked = true;
        console.log(elemento);
    }
}

parametros.forEach(ativarProduto);

