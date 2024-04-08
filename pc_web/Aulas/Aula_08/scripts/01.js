const  botoes = document.querySelectorAll("button");
const cores   = {"vermelho": "rgb(255, 0, 0)",
                 "verde":    "rgb(0, 255, 0)",
                 "azul":     "rgb(0, 0, 255)",
                 "amarelo":  "rgb(255, 255, 0)"
                };

const body = document.querySelector("body");

body.addEventListener("click", target => {
    const cor = target.target.id
    document.body.style.backgroundColor = cores[cor]
})
