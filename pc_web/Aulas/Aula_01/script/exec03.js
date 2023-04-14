const button = document.querySelector("#enviar");
const reset = document.querySelector("#reset");
const numerodom = document.querySelector("#numero");
const result = document.querySelector("#result");


button.addEventListener("click", () =>{
    let numero = Number(numerodom.value);

    result.innerHTML = numero % 2 === 0 ? `${numero} é par` : `${numero} é ímpar`
})


reset.addEventListener("click", () =>{
    numerodom.value = ""
})