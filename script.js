//e --> enter
//i --> imes
//a --> ai
//o --> ober
//u --> ufat

function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");

    document.getElementById("texto-mensaje").style.backgroundImage = "none"
    document.getElementById("texto-mensaje").innerHTML = txtcifrado;
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");

    document.getElementById("texto-mensaje").style.backgroundImage = "none"
    document.getElementById("texto-mensaje").innerHTML = txtcifrado;
}

function copiar() {
    var contenido = document.getElementById("texto-mensaje");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió!");
}