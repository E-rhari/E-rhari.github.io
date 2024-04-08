const inputs = document.querySelectorAll("input");

inputs[3].addEventListener("click", target => {
    target.preventDefault();

    inputs[2].value = ""
    let i = 0;
    let inputMenor;

    if(inputs[0].length > inputs[1].length)
        inputMenor = inputs[1].value;
    else
        inputMenor = inputs[0].value;

    for(i; i < inputMenor.length; i++){
        inputs[2].value += inputs[0].value[i];
        inputs[2].value += inputs[1].value[i];
    }
})