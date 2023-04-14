const input  = document.querySelector("#numero");
const result = document.querySelector("#result")
const reset  = document.querySelector("#reset");


input.addEventListener("input", () => {
    const num = Number(input.value);

    var cont = 0;
    for(let i = 2; i <= num; i++){
        if (num % i === 0)
            cont++;
    }

    result.innerHTML = cont <= 1 ? `O número ${num} é primo` : `O número ${num} NÃO é primo`
})


reset.addEventListener("click", () => {
    input.value = "0";
    result.innerHTML = "";
})