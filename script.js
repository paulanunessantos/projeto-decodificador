function mudarVisao(textoFinal) {
    document.getElementsByClassName('conteudo_criptografado_img').item(0).style.display = "none";
    document.getElementsByClassName('conteudo_criptografado_text2').item(0).style.display = "none";
    document.getElementsByClassName('conteudo_criptografado_text1').item(0).style.display = "none";
    document.getElementById('texto_final').style.display = "flex";
    document.getElementById('texto_final').innerHTML = textoFinal;
    document.getElementsByClassName('botao_copiar').item(0).style.display = "block";
}

function criptografar() {
    var textoInicial = document.getElementById("texto_inicial").value;
    var textoFinal = "";

    for (var i = 0; i < textoInicial.length; i++) {
        if (textoInicial[i] == "a") {
            textoFinal += "ai";
        } else if (textoInicial[i] == "e") {
            textoFinal += "enter";
        } else if (textoInicial[i] == "i") {
            textoFinal += "imes";
        } else if (textoInicial[i] == "o") {
            textoFinal += "ober";
        } else if (textoInicial[i] == "u") {
            textoFinal += "ufact";
        } else {
            textoFinal += textoInicial[i];
        }
    }

    mudarVisao(textoFinal);
}

function descriptografar() {
    var textoInicial = document.getElementById("texto_inicial").value;
    var textoFinal = "";

    textoFinal = textoInicial.replaceAll("ai", "a")
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ufact", "u");

    mudarVisao(textoFinal);
}

function copiar() {
    var copy = document.getElementById('texto_final').innerHTML;
    navigator.clipboard.writeText(copy);
}