//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;

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
    palabraSecreta = recuperarTexto("txtSecreta");
    console.log(palabraSecreta);
    if (palabraSecreta.length !== 5) {
        alert("Debe ingresar una palabra de 5 letras mayúsculas");
        return;
    }

    for (let i = 0; i < palabraSecreta.length; i++) {
        if (!esMayuscula(palabraSecreta[i])) {
            alert("Debe ingresar una palabra de 5 letras mayúsculas");
            return;
        }
    }
}


mostrarLetra = function (letra, posicion) {
    
    if(posicion == 0){
        console.log(letra)
        mostrarTexto("div0",letra);
    }
    if(posicion == 1){
        mostrarTexto("div1",letra);
    }
    if(posicion == 2){
        mostrarTexto("div2",letra);
    }
    if(posicion == 3){
        mostrarTexto("div3",letra);
    }
    if(posicion == 4){
        mostrarTexto("div4",letra);
    }

}


validar = function (letra) {
    let letrasEncontradas = 0;
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] == letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
        }
    }

}


ingresarLetra=function(){
    let letra=recuperarTexto("txtLetra");
    if(esMayuscula(letra)){
        validar(letra);
    } else {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
}