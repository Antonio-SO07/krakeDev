//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = "" ;
let intentos = 0;
let coincidencias = 0;
let errores = 0;

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

    if (posicion == 0) {
        console.log(letra)
        mostrarTexto("div0", letra);
    }
    if (posicion == 1) {
        mostrarTexto("div1", letra);
    }
    if (posicion == 2) {
        mostrarTexto("div2", letra);
    }
    if (posicion == 3) {
        mostrarTexto("div3", letra);
    }
    if (posicion == 4) {
        mostrarTexto("div4", letra);
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
    if (letrasEncontradas > 0) {
        coincidencias+=letrasEncontradas
    }else{
        errores++;
        mostrarAhorcado();
    }



}


ingresarLetra = function () {
    intentos++;
    console.log("INTENTO N°" + intentos);
    let letra = recuperarTexto("txtLetra");
    if (esMayuscula(letra)) {
        validar(letra);
        if (coincidencias == 5) {
            mostrarImagen("ahorcadoImagen", "ganador.gif");
        }
        if (intentos == 10) {
            mostrarImagen("ahorcadoImagen", "gameOver.gif")
            palabraSecreta="";
            document.getElementById("txtSecreta")
        }
        mostrarTextoEnCaja("txtLetra", "");
    } else {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }

}


mostrarAhorcado = function () {
    if (errores == 1) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_01.png");
    } else if (errores == 2) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_02.png");
    } else if (errores == 3) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_03.png");
    } else if (errores == 4) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_04.png");
    } else if (errores == 5) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_05.png");
    } else if (errores == 6) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_06.png");
    } else if (errores == 7) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_07.png");
    } else if (errores == 8) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_08.png");
    } else if (errores == 9) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_09.png");
    }
}