const mudaCor = document.querySelector("#mudaCor");

const colorValue = () =>  Math.trunc(Math.random() * 255);

const createColor = () =>`rgb(${colorValue()}, ${colorValue()}, ${colorValue()}`;

const changeBackgroundColor = (selector) => {
    document.querySelector(selector).style.backgroundColor = createColor();
}

mudaCor.addEventListener("click", () => {
    changeBackgroundColor("body")
})