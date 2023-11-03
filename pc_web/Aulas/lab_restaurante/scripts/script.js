const addToCart = item => {
    const cartDom = document.querySelector("#itens");
    cartDom.innerHTML += `<li>${item.name}: $${item.price.toFixed(2)}</li>`;
}


const addToTotalPrice = item => {
    const totalPrice = document.querySelector("#total");
    const basePrice = (parseFloat(totalPrice.innerHTML) + item.price).toFixed(2);
    totalPrice.innerHTML = `${basePrice} * 10% = ${(parseFloat(basePrice) * 1.1).toFixed(2)}`
}


const addToCartAndTotalPrice = item => {
    addToCart(item);
    addToTotalPrice(item);
}


const reestablishCartFromStorage = () =>{
    let i = 0;
    if(localStorage.length == 0)
        return
    for(i; i < localStorage.length; i++)
        addToCartAndTotalPrice(JSON.parse(localStorage[i]))
}


const getAjax = async url => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


const renderMenu = async (callBackFunc) => {
    const menuSection = document.querySelector("#pratos");
    const menuJson = await getAjax("https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json");

    for(let i = 0; i < menuJson.length; i++){
        const dish = menuJson[i]
        if(typeof(dish.name) == "undefined")
            continue

        let dishDiv = `<div class="prato">
            <h3 class="name">${dish.name}</h3>
            <h4 class="price">${dish.price}</h4>
            <p class="details">${dish.details}</p>
            <button class='add'>Add to Cart</button>
            <!--<figure>
                <img src="${dish.photo}">
            </figure>-->
        </div>
        `;

        menuSection.innerHTML += dishDiv;
        
    }
    if(callBackFunc)
        callBackFunc()
}


function SelectedItem(nome, preco){
    this.name = nome;

    const prices = preco.split(" ");
    if(prices[0].length == 1)
        this.price = parseFloat(prices[1]);
    else
        this.price = parseFloat(prices[0].substr(1, 4));
}


const adicionaEventoClique = () => {
    const pratosDom = document.querySelectorAll(".prato")

    pratosDom.forEach(itemAtual => {
        const buttonAdd = itemAtual.querySelector(".add");
        buttonAdd.addEventListener("click", () => {
            const itemName  = itemAtual.querySelector("h3").textContent
            const itemPrice = itemAtual.querySelector("h4").textContent
            
            const item = new SelectedItem(itemName, itemPrice);

            addToCartAndTotalPrice(item)

            localStorage.setItem(localStorage.length, JSON.stringify(item));
        });
    });
}

const sendToHistory = () => {
    const historyDom = document.querySelector("#historico");

    const itensInCart = document.querySelector("#itens");
    const totalPrice  = document.querySelector("#total");
    
    historyDom.innerHTML += `<div class="pedido-antigo">${itensInCart.innerHTML}<button class="cancelar">Cancelar</button></div>`;

    itensInCart.innerHTML = "";
    totalPrice.innerHTML  = "0";
    localStorage.clear();
}

const removeOldOrder = () => {
    const historyDom = document.querySelector("#historico");
    const oldOrders = historyDom.querySelectorAll(".pedido-antigo");

    const currentOldOrder = oldOrders[oldOrders.length - 1]
    const test = currentOldOrder.addEventListener("click", () => {
        currentOldOrder.remove();
    });

    const timer = setInterval(() => {
        const cancelButton = currentOldOrder.querySelector(".cancelar");
        currentOldOrder.removeEventListener("click", test);
        cancelButton.remove();
        clearTimeout(timer);
    }, 300000);
}

const finishOrder = () => {
    const buttonFinish = document.querySelector("#fechar");
    buttonFinish.addEventListener("click", () => {
        sendToHistory();
        removeOldOrder();
    });
}

renderMenu(adicionaEventoClique);
reestablishCartFromStorage();
finishOrder();