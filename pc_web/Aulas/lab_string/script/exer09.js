const input  = document.querySelector("#frase");
const result = document.querySelector("#result");


input.addEventListener("input", () => {
    const birthday = new Date(input.value);
    const data = new Date()
    const ageDay = (((birthday - data) / 24 / 60 / 60 / 1000) * -1);

    result.innerHTML = `Você tem ${Math.trunc(ageDay)} dias de idade`;
})

