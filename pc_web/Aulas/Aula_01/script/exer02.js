const button = document.getElementById("enviar");
const reset = document.getElementById("reset");
const result = document.getElementById("result");
const num01dom = document.getElementById("numero01");
const num02dom = document.getElementById("numero02");


function recuperaValor(seletor){
    return document.querySelector(seletor).value || false
}


function comparaNumeros (num1,num2){
    if (!(num1 && num2)){
        return "Erro na entrada"
    }
    result.innerHTML = num01 > num02 ? `O número ${num01} é maior que ${num02}` : num01 < num02 ? `O número ${num02} é maior que ${num01}` : "Ambos são iguais"
}


button.onclick = function () {

    recuperaValor ("#numero01");
    recuperaValor ("#numero02");
    comparaNumeros(num01, num02);

    num01dom.value = "";
    num02dom.value = "";
}


reset.onclick = function () {
    num01dom.value = "";
    num02dom.value = "";
}
