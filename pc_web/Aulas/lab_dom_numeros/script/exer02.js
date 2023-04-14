const submit   = document.getElementById("enviar");
const reset    = document.getElementById("reset");
const result   = document.getElementById("result");
const num01dom = document.getElementById("numero01");
const num02dom = document.getElementById("numero02");


function recuperaValor(seletor){
    return document.querySelector(seletor).value || false
}


function comparaNumeros (num1,num2){
    if (!(num1 && num2)){
        return "Erro na entrada"
    }
    result.innerHTML = num1 > num2 ? `O número ${num1} é maior que ${num2}` : num1 < num2 ? `O número ${num2} é maior que ${num1}` : "Ambos são iguais"
}


submit.onclick = function () {
    const num01 = recuperaValor ("#numero01");
    const num02 = recuperaValor ("#numero02");
    comparaNumeros(num01, num02);

    num01dom.value = "";
    num02dom.value = "";
}


reset.onclick = function () {
    num01dom.value = "";
    num02dom.value = "";
}
