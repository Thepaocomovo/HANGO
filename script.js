let pratoSelecionado;
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

        //listar itens selecionados na tela do pedido
        let item1 = document.querySelector(".item1")
        item1.innerHTML = document.querySelector(".selecionado .optionName").innerHTML

        let item2 = document.querySelector(".item2")
        item2.innerHTML = document.querySelector(".selecionado1 .optionName").innerHTML

        let item3 = document.querySelector(".item3")
        item3.innerHTML = document.querySelector(".selecionado2 .optionName").innerHTML
        
        //listar preços dos itens selecionados na tela do pedido
        let preco1 = document.querySelector(".preco1")
        preco1.innerHTML = document.querySelector(".selecionado .optionPrice").innerHTML

        let preco2 = document.querySelector(".preco2")
        preco2.innerHTML = document.querySelector(".selecionado1 .optionPrice").innerHTML

        let preco3 = document.querySelector(".preco3")
        preco3.innerHTML = document.querySelector(".selecionado2 .optionPrice").innerHTML

        TOTAL()
        
    }
}  
//calculo total do pedido
function TOTAL(){
    let preco1 = document.querySelector(".preco1")
    preco1.innerHTML = document.querySelector(".selecionado .optionPrice").innerHTML
    let preco1Number = Number(preco1.innerHTML.replace('R$',''));

    let preco2 = document.querySelector(".preco2")
    preco2.innerHTML = document.querySelector(".selecionado1 .optionPrice").innerHTML
    let preco2Number = Number(preco2.innerHTML.replace('R$',''));

    let preco3 = document.querySelector(".preco3")
    preco3.innerHTML = document.querySelector(".selecionado2 .optionPrice").innerHTML
    let preco3Number = Number(preco3.innerHTML.replace('R$',''));
    let totalPedido = preco1Number + preco2Number + preco3Number;
   
    //imprime o valor total na tela de fechamento de pedido
    let item4 = document.querySelector(".totalPrice");
    item4.innerHTML = `R$ ${totalPedido}.00`
}   


//voltar para tela de seleção de pedidos
function cancelar(elemento){
    let cancelar = document.querySelector(".fundoBranco");
    cancelar.classList.add("fecharPedido");


  
}

function whatsApp(){
    let NOME = prompt("Qual seu nome?");
    let ENDERECO = prompt("Qual seu endereço?");
    let preco1 = document.querySelector(".preco1");
    preco1.innerHTML = document.querySelector(".selecionado .optionPrice").innerHTML;
    let preco1Number = Number(preco1.innerHTML.replace('R$',''));
     
    let preco2 = document.querySelector(".preco2");
    preco2.innerHTML = document.querySelector(".selecionado1 .optionPrice").innerHTML;
    let preco2Number = Number(preco2.innerHTML.replace('R$',''));
  
    let preco3 = document.querySelector(".preco3");
    preco3.innerHTML = document.querySelector(".selecionado2 .optionPrice").innerHTML;
    let preco3Number = Number(preco3.innerHTML.replace('R$',''));
      
  
    let totalPedido = preco1Number + preco2Number + preco3Number;
  
    let item1 = document.querySelector(".item1");
    let item2 = document.querySelector(".item2");
    let item3 = document.querySelector(".item3");
  
      
    let meuPedido = (`Olá, gostaria de fazer o pedido:\n
    - Prato: ${item1.innerHTML}\n
    - Bebida: ${item2.innerHTML}\n
    - Sobremesa: ${item3.innerHTML}\n
    Total: R$${totalPedido}.00\n
    \n
    Nome: ${NOME}
    Endereço: ${ENDERECO}`);

    let meuLink = encodeURIComponent(meuPedido);
      
    //`https://wa.me/+5511990174306?text=${meuLink}`

    let divLink = document.querySelector(".link");
    divLink.innerHTML = "<a href='https://wa.me/+5511990174306?text=" + meuLink + "'target='_blank'><p>Tudo certo, pode pedir!</p> </a>";
}
