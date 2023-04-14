const fahrenheit = document.querySelector("#fahrenheit");
const celcius    = document.querySelector("#celcius");
const reset      = document.querySelector("#reset")


function convertFahrenheitCelcius(fahrenheit){
    return ((fahrenheit - 32)/9)*5;
}


function renderCelciusConvertion(){
    const fahrenheit_temperature = Number(fahrenheit.value);

    celcius.innerHTML = Number(convertFahrenheitCelcius(fahrenheit_temperature));
}


fahrenheit.addEventListener("input", renderCelciusConvertion)


reset.addEventListener("click", () => {
    fahrenheit.value = 0;
    renderCelciusConvertion();
})