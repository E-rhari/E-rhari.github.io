const botao = document.querySelector("#execute");


const soma = (op1=0, op2=0) => op1 + op2;

function subtracao() {
    let acum = 0;
    for(let i=0; i < arguments.length; i++) {
        acum -= arguments[i];
    }
    return acum;
}

const criaItemDeLista = (tarefa) => `<li>${tarefa}</li>`;

function carregaLista(){
    const lista = document.querySelector("#todoList");
    for(let i = 0; i < arguments.length; i++)
        if(!lista.innerHTML.includes(arguments[i]))
            lista.innerHTML += criaItemDeLista(arguments[i])
}

function carregaListaRest(seletor, ...tarefas){
    const lista = document.querySelector(seletor);

    tarefas.forEach(tarefa => {
        if(!lista.innerHTML.includes(tarefa))
            lista.innerHTML += criaItemDeLista(tarefa)
    })
}


botao.addEventListener("click", () =>{
    carregaLista("Estudar JS", "Fazer a calculadora", 
                "Fazer Jogo da Velha", "Ficar rico programando")
    carregaLista("Estudar TypeScript", "Fazer a calculadora", 
                "Comprar figures de anime", "Ficar rico programando",
                "me casar", "me divorciar", "pagar pensão e ser fodido")
    
    carregaListaRest("#todoList", "Qual foi o lucro obtido?")
})


console.log(soma());
console.log(soma(1));
console.log(soma(1, 2));

console.log(subtracao());
console.log(subtracao(1));
console.log(subtracao(1, 2));