//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula = function (caracter) {
    let cmpCarac;
    cmpCarac = caracter.charCodeAt(0);
    if (cmpCarac >= 65 && cmpCarac <= 90) {
        return true;
    } else {
        return false;
    }
}