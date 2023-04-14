const DOMnum01 = document.querySelector("#number1");
const DOMnum02 = document.querySelector("#number2");
const btn      = document.querySelector("#submit")
const result   = document.querySelector("#result")


function sum(number1, number2){
    console.log(number1);
    console.log(number2)
    return number1 + number2;
}


function getNumber(DOM){
    return Number(DOM.value);
}


DOMnum01.addEventListener("input", () => {
    let number1 = getNumber(DOMnum01);
    let number2 = getNumber(DOMnum02);
    result.innerHTML = sum(number1, number2);
})


DOMnum02.addEventListener("input", () => {
    let number1 = getNumber(DOMnum01);
    let number2 = getNumber(DOMnum02);
    result.innerHTML = sum(number1, number2);
})