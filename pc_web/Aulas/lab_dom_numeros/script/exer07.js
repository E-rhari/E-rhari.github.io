const DOM_nota01 = document.querySelector("#nota1");
const DOM_nota02 = document.querySelector("#nota2");
const DOM_nota03 = document.querySelector("#nota3");
const media      = document.querySelector("#media");

const enviar = document.querySelector("#enviar");
const reset  = document.querySelector("#reset");


function calcMedia(nota01, nota02, nota03){
    return ((nota01 * 2) + (nota02 * 3) + (nota03 * 5))/10;
}


function renderMedia(){
    const nota01 = DOM_nota01.value;
    const nota02 = DOM_nota02.value;
    const nota03 = DOM_nota03.value;

    media.innerHTML = calcMedia(nota01, nota02, nota03);
}


enviar.addEventListener("click", renderMedia)


reset.addEventListener("click", () => {
    DOM_nota01.value = 0;
    DOM_nota02.value = 0;
    DOM_nota03.value = 0;

    renderMedia();
})