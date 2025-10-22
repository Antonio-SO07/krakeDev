//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = "";





esMayuscula = function (caracter) {
    let cmpCarac;
    cmpCarac = caracter.charCodeAt(0);
    if (cmpCarac >= 65 && cmpCarac <= 90) {
        return true;
    } else {
        return false;
    }
}

guardarPalabra = function () {
    let palabra = recuperarTexto("txtSecreta");
    console.log(palabra);
    if (palabra.length !== 5) {
        alert("Debe ingresar una palabra de 5 letras mayúsculas");
        return;
    }

    for (let i = 0; i < palabra.length; i++) {
        if (!esMayuscula(palabra[i])) {
            alert("Debe ingresar una palabra de 5 letras mayúsculas");
            return;
        }
    }
}


mostrarLetra = function (letra, posicion) {
    let divs = ["div0", "div1", "div2", "div3", "div4"];
    if (posicion >= 0 && posicion < divs.length) {
        document.getElementById(divs[posicion]).innerText = letra;
    }
}


validar = function (letra) {
    let letrasEncontradas = false;
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] == letra) {
            mostrarLetra(letra, i);
            coincidenciasEnLaPalabra++;
            letrasEncontradas = true;
        }
    }
}