esMayuscula = function (caracter) {
    let letra;
    let cmpCarac;
    letra = recuperarTexto(caracter);
    cmpCarac = letra.charCodeAt(0);
    if (cmpCarac >= 65 && cmpCarac <= 90) {
        return true;
    } else {
        return false;
    }
}



esDigito = function (caracter) {
    let letra;
    let cmpCarac;
    letra = recuperarTexto(caracter);
    cmpCarac = letra.charCodeAt(0);
    if (cmpCarac >= 48 && cmpCarac <= 57) {
        return true;
    } else {
        return false;
    }
}




esGuion = function (caracter) {
    let letra;
    let cmpCarac;
    letra = recuperarTexto(caracter);
    cmpCarac = letra.charCodeAt(0);
    if (cmpCarac == 45) {
        return true;
    } else {
        return false;
    }
}