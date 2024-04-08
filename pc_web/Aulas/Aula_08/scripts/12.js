const imagens = document.querySelectorAll("img");

imagens.forEach(element => {
    if(element.id != "braba")
        element.addEventListener("click", target => {
            imagens[2].src = target.target.src;
        })
});