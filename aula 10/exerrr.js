var ImgAtual = "lol.jpg"
var imgAnterior ="lol.jpg"

function trocar() {
    document.getElementById("figura").src = ImgAtual;
    let aux = ImgAtual ;
    ImgAtual = imgAnterior;
    imgAnterior = aux;
}

function hello(){
    let d = document.getElementById("cores");
    let text = d.options[d.selectedIndex].value;
    document.body.style.backgroundColor=text;
}

function lula() {
    document.body.style.backgroundColor = "red";
}



