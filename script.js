var pratoSelecionado;
let bebidaSelecionada;
let sobremesaSelecionada;
let prato = 0;
let bebida = 0;
let sobremesa = 0;


function selecaoPrato(elemento) {
    pratoSelecionado = document.querySelector(".selecionado");
    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    prato = 1
    ativar()
}

function selecaoBebida(elemento) {
    bebidaSelecionada = document.querySelector(".selecionado1");
    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado1");
    }
    elemento.classList.add("selecionado1");
    bebida = 1
    ativar()
}

function selecaoSobremesa(elemento) {
    sobremesaSelecionada = document.querySelector(".selecionado2");
    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado2");
    }
    elemento.classList.add("selecionado2");
    sobremesa = 1
    ativar()
    
}

function ativar() {
    if(prato === 1 && bebida === 1 && sobremesa === 1){
    const botao = document.querySelector(".botao");
    botao.classList.add("ativado");
    botao.innerHTML = "Fechar pedido";
    }
}
