function remover(nome, valor){
    let storageCopy = []
    for(let i = 0; i < localStorage.length; i++){
        storageCopy.push(localStorage.key(i));
    }

    const candidates = storageCopy.filter((element) => element.includes(nome));
    candidates.forEach(candidate => {
        if(localStorage.getItem(candidate) == valor)
            localStorage.removeItem(candidate)
    });
}

function adicionar(nome, valor){
    let storageCopy = []
    for(let i = 0; i < localStorage.length; i++){
        storageCopy.push(localStorage.key(i));
    }

    const candidates = storageCopy.filter((element) => element.includes(nome));
    if(candidates.length == 0){
        localStorage.setItem(nome, valor);
        return
    }
    localStorage.setItem(`${nome}${candidates.length}`, valor);
}


function adicionaTransacao(nome, valor){
    const transacoesDom = document.querySelector("#transactions");
    
    // <button class="delete-btn">x</button>
    const btnDeletar = document.createElement("button");
    const x          = document.createTextNode("x");
    btnDeletar.appendChild(x)
    btnDeletar.classList.add("delete-btn");

    const li    = document.createElement("li");
    const texto = document.createTextNode(`${nome} $${valor}`);
    li.appendChild(texto);

    if(parseFloat(valor) > 0)
        li.classList.add("plus");
    else
        li.classList.add("minus");

    li.appendChild(btnDeletar);
    transacoesDom.appendChild(li);

    btnDeletar.addEventListener("click", () => {
        li.remove();
        if(valor > 0){
            const receitasDom = document.querySelector("#money-plus");
            const novaReceita = parseFloat(receitasDom.innerHTML.slice(4)) - valor;
            receitasDom.innerHTML = `+ R$${novaReceita.toFixed(2)}`;
        } 
        else if(valor < 0){
            const despesasDom = document.querySelector("#money-minus");
            const novaDespesa = parseFloat(despesasDom.innerHTML.slice(4)) + parseFloat(valor);
            console.log(novaDespesa)
            despesasDom.innerHTML = `- R$${parseFloat(novaDespesa).toFixed(2)}`;
            // const despesasDom = document.querySelector("#money-minus");
            // const novaDespesa = parseFloat(despesasDom.innerHTML.slice(4)) + valor;
            // despesasDom.innerHTML = `- R$${parseFloat(novaDespesa).toFixed(2)}`;
        }
        
        const balancoDom = document.querySelector("#balance");
        const novoBalaco = parseFloat(balancoDom.innerHTML.slice(3)) - valor;
        balancoDom.innerHTML = `R$ ${novoBalaco.toFixed(2)}`;

        remover(nome, valor)
    })
}


function atualizaRenda(valorFloat) {
    valorFloat = parseFloat(valorFloat);
    
    if(valorFloat > 0){
        const receitasDom = document.querySelector("#money-plus");
        const novaReceita = parseFloat(receitasDom.innerHTML.slice(4)) + valorFloat;
        receitasDom.innerHTML = `+ R$${novaReceita.toFixed(2)}`;
    } 
    else if(valorFloat < 0){
        const despesasDom = document.querySelector("#money-minus");
        const novaDespesa = parseFloat(despesasDom.innerHTML.slice(4)) - valorFloat;
        despesasDom.innerHTML = `- R$${parseFloat(novaDespesa).toFixed(2)}`;
    }

    const balancoDom = document.querySelector("#balance");
    const novoBalaco = valorFloat + parseFloat(balancoDom.innerHTML.slice(3));
    balancoDom.innerHTML = `R$ ${novoBalaco.toFixed(2)}`
}


function resetaInputs(...elements) {
    elements.forEach(element => {
        element.value = "";
    });
}



if(localStorage)
    for(let i = 0; i < localStorage.length; i++){
        // const item = JSON.parse(localStorage.getItem(i));
        adicionaTransacao(localStorage.key(i), localStorage.getItem(localStorage.key(i)));
        atualizaRenda(localStorage.getItem(localStorage.key(i)))
    }


const btnAdicionar = document.querySelector(".btn");
btnAdicionar.addEventListener("click", () =>{
    const nomeDom  = document.querySelector("#text");
    const valorDom = document.querySelector("#amount");
    const valor = parseFloat(valorDom.value)

    adicionaTransacao(nomeDom.value, valor);
    atualizaRenda(valor);
    adicionar(nomeDom.value, valor)
    resetaInputs(nomeDom, valorDom)
});