const inputs   = document.querySelectorAll("input");
const inverter = document.querySelector("#inverter");

inverter.addEventListener("click", target => {
    target.preventDefault();

    let novoArray = [];
    for(let i = 0; i < inputs.length; i++)
        novoArray.push(inputs[i].value);

    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = novoArray[inputs.length - 1 - i]
    }
})