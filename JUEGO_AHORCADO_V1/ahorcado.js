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