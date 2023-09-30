const menu = document.querySelectorAll(".item");

let total = 0;
let carrinho = []
if(localStorage.getItem("carrinho"))
    console.dir(localStorage.getItem("carrinho"));
    // carrinho = localStorage.getItem("carrinho");

// carrinho.forEach(item =>{

// })


function ItemSelecionado(nome, preco){
    this.nome = nome;
    this.preco = parseFloat(preco.substr(2));
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
        // const target = evento.target;
        // const itemNome = target.getElementsByTagName("figcaption")[0].textContent
        const itemNome = itemAtual.querySelector("figcaption").textContent
        const itemPreco = itemAtual.querySelector(".item-price").textContent
        
        const item = new ItemSelecionado(itemNome, itemPreco);

        adicionaAoCarrinho(item)
        adicionaPreçoAoTotal(item);

        carrinho.push(item);

        for(let i = 0; i < carrinho.length; i++){
        localStorage.setItem(i, item)
        // localStorage.removeItem("carrinho")
        console.dir(localStorage.getItem("carrinho"))

            }
    });
});