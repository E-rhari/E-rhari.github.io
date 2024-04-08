const inputs = document.querySelectorAll("input");

inputs[3].addEventListener("click", target => {
    if(!(inputs[0].value && inputs[1].value && inputs[2].value)){
        target.preventDefault();
        return
    }
    if((inputs[1].value.length < 6 || inputs[1].value.length > 10) || inputs[2].value.length < 6 || inputs[2].value.length > 10){
    target.preventDefault();
    return
    }
    if(inputs[1].value != inputs[2].value){
        target.preventDefault();
        return
    }
})