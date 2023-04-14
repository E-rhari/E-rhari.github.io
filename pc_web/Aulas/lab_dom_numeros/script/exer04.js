const cateto1    = document.querySelector("#cateto1");
const cateto2    = document.querySelector("#cateto2");
const hipotenusa = document.querySelector("#hipotenusa");
const reset      = document.querySelector("#reset");


function calcHipotenusa(a, b){
    return Math.sqrt(a**2 + b**2);
}


function renderHipotenusa(){
    const a = cateto1.value;
    const b = cateto2.value;
    hipotenusa.innerHTML = calcHipotenusa(a, b);
}


cateto1.addEventListener("input", renderHipotenusa)

cateto2.addEventListener("input", renderHipotenusa)

reset.addEventListener("click", () =>{
    cateto1.value = 1;
    cateto2.value = 1;
    renderHipotenusa();
})