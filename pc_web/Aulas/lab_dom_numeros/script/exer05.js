const input_salario  = document.querySelector("#salario");
const input_reajuste = document.querySelector("#reajuste");
const result         = document.querySelector("#result");

const reset = document.querySelector("#reset")


function calcReajuste(salario, reajuste){
    return salario * ((reajuste/100) + 1);
}


function getNumberValue(element){
    return Number(element.value);
} 


function renderReajuste(){
    const salario  = getNumberValue(input_salario);
    const reajuste = getNumberValue(input_reajuste);

    result.innerHTML = calcReajuste(salario, reajuste);
}


input_salario.addEventListener("input", renderReajuste);

input_reajuste.addEventListener("input", renderReajuste);


reset.addEventListener("click", () => {
    input_salario.value = 0;
    input_reajuste.value = 0;

    renderReajuste();
})


