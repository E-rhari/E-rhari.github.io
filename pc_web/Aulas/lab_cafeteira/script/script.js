const menu = document.querySelectorAll(".item");

let total = 0;
if(localStorage)
    for(let i = 0; i < localStorage.length; i++){
        const item = JSON.parse(localStorage.getItem(i));
        adicionaItemEPreco(item);
    }



function ItemSelecionado(nome, preco){
    this.nome = nome;
    this.preco = parseFloat(preco.substr(2));
}


function adicionaItemEPreco(item){
    adicionaAoCarrinho(item);
    adicionaPreçoAoTotal(item);
}


function adicionaPreçoAoTotal(item){
    const totalDOM = document.querySelector(".total");
    total += item.preco;
    totalDOM.textContent = total.toFixed(2)
}


function adicionaAoCarrinho(item){
    const listaItemsDOM = document.querySelector(".itens");
    listaItemsDOM.innerHTML += `<li>${item.nome}: R$${item.preco.toFixed(2)}</li>`;
}



menu.forEach(itemAtual => {
    itemAtual.addEventListener("click", () =>{
        const itemNome = itemAtual.querySelector("figcaption").textContent
        const itemPreco = itemAtual.querySelector(".item-price").textContent
        
        const item = new ItemSelecionado(itemNome, itemPreco);

        adicionaAoCarrinho(item)
        adicionaPreçoAoTotal(item);

        localStorage.setItem(localStorage.length, JSON.stringify(item));
    });
});