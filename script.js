var pratoSelecionado;
let bebidaSelecionada;
let sobremesaSelecionada;
let prato = 0;
let bebida = 0;
let sobremesa = 0;

//seleção itens
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

//liberar botão para finalizar pedido
function ativar() {
    if(prato === 1 && bebida === 1 && sobremesa === 1){
    const botao = document.querySelector(".botao");
    botao.classList.add("ativado");
    botao.innerHTML = "Fechar pedido";
    }
}

//ir para pagina para fechar pedido
function fecharPedido(){
    if(prato === 1 && bebida === 1 && sobremesa === 1){
        let fechar = document.querySelector(".fecharPedido");
        fechar.classList.remove("fecharPedido");
    }
}

//voltar para tela de seleção de pedidos
function cancelar(elemento){
    let cancelar = document.querySelector(".fundoBranco");
    cancelar.classList.add("fecharPedido");
}

function cancelar(elemento){
    let cancelar = document.querySelector(".fundoBranco");
    cancelar.classList.add("fecharPedido");
}




