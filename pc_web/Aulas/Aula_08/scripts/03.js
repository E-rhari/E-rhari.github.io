const select  = document.querySelector("select");
const cores   = {"vermelho": "rgb(255, 0, 0)",
                 "verde":    "rgb(0, 255, 0)",
                 "azul":     "rgb(0, 0, 255)",
                 "amarelo":  "rgb(255, 255, 0)"
                };


select.addEventListener("change", () => {
    console.dir(select.value)
    const cor = select.value
    document.body.style.backgroundColor = cores[cor];
})
