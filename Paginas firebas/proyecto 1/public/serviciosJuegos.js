obtenerAleatorio = function () {
    let aleatorio = Math.random();
    let aleatorioMultiplicado = aleatorio * 3;
    let aleatorioEntero = parseInt(aleatorioMultiplicado);
    let cmpAleatorio = aleatorioEntero + 1;
    return cmpAleatorio;
}

generarElemento = function () {
    let aleatorio = obtenerAleatorio();
    if (aleatorio == 1) {
        return "PIEDRA";
    } else if (aleatorio == 2) {
        return "PAPEL";
    } else if (aleatorio == 3) {
        return "TIJERA";
    }

}
determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 == eleccionJugador2) {
        console.log("hubo empate");
        return 0;
    } else if (
        (eleccionJugador1 == "PIEDRA" && eleccionJugador2 == "TIJERA") ||
        (eleccionJugador1 == "PAPEL" && eleccionJugador2 == "PIEDRA") ||
        (eleccionJugador1 == "TIJERA" && eleccionJugador2 == "PAPEL")
    ) {
        console.log("ganaste")
        return 1;
    } else {
        console.log("perdiste")
        return 2;
    }
}

generarRuta = function (nombre) {
    if (nombre == "PIEDRA") {
        return "./imagenes/piedra.jpg";
    } else if (nombre == "PAPEL") {
        return "./imagenes/papel.jpg";
    } else if (nombre == "TIJERA") {
        return "./imagenes/tijera.jpg";
    }
}

