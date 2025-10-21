validarEstructura = function (placa) {
    let errores = false;
    if (placa.length != 7 && placa.length != 8) {
        mostrarTexto("lblErrorPlaca", "La placa debe tener 7 u 8 caracteres.");
        errores = true;
    } else {
        if (!esMayuscula(placa[0])) {
            mostrarTexto("lblErrorPlaca", "El primer caracter debe ser una letra mayúscula.");
            errores = true;
        }
        if (!esMayuscula(placa[1])) {
            mostrarTexto("lblErrorPlaca", "El segundo caracter debe ser una letra mayúscula.");
            errores = true;
        }
        if (!esMayuscula(placa[2])) {
            mostrarTexto("lblErrorPlaca", "El tercer caracter debe ser una letra mayúscula.");
            errores = true;
        }
        if (!esGuion(placa[3])) {
            mostrarTexto("lblErrorPlaca", "El cuarto caracter debe ser un guion.");
            errores = true;
        }
        if (!esDigito(placa[4])) {
            mostrarTexto("lblErrorPlaca", "El quinto caracter debe ser un dígito.");
            errores = true;
        }
        if (!esDigito(placa[5])) {
            mostrarTexto("lblErrorPlaca", "El sexto caracter debe ser un dígito.");
            errores = true;
        }
        if (!esDigito(placa[6])) {
            mostrarTexto("lblErrorPlaca", "El séptimo caracter debe ser un dígito.");
            errores = true;
        }
        if (placa.length == 8 && !esDigito(placa[7])) {
            mostrarTexto("lblErrorPlaca", "El octavo caracter debe ser un dígito.");

        }
    }
    if (errores == false) {
        mostrarTexto("lblErrorPlaca", "")
        mostrarTexto("lblValidacion", "")
    }
    return !errores;
}

obtenerProvincia = function (placa) {
    let placas = true;
    let cmpPlaca = placa.charCodeAt(0);
    if (cmpPlaca == 65) {
        mostrarTexto("lblProvincia", "AZUAY");
        placas = false;
    }
    if (cmpPlaca == 66) {
        mostrarTexto("lblProvincia", "Bolivar");
        placas = false;
    }
    if (cmpPlaca == 67) {
        mostrarTexto("lblProvincia", "Carchi");
        placas = false;
    }
    if (cmpPlaca == 69) {
        mostrarTexto("lblProvincia", "Esmeraldas");
        placas = false;
    }
    if (cmpPlaca == 71) {
        mostrarTexto("lblProvincia", "Guayas");
        placas = false;
    }
    if (cmpPlaca == 72) {
        mostrarTexto("lblProvincia", "Chimborazo");
        placas = false;
    }
    if (cmpPlaca == 73) {
        mostrarTexto("lblProvincia", "Imbabura");
        placas = false;
    }
    if (cmpPlaca == 74) {
        mostrarTexto("lblProvincia", "Santo Domingo");
        placas = false;
    }
    if (cmpPlaca == 75) {
        mostrarTexto("lblProvincia", "Sucumbios");
        placas = false;
    }
    if (cmpPlaca == 76) {
        mostrarTexto("lblProvincia", "Loja");
        placas = false;
    }
    if (cmpPlaca == 77) {
        mostrarTexto("lblProvincia", "Manabi");
        placas = false;
    }
    if (cmpPlaca == 78) {
        mostrarTexto("lblProvincia", "Napo");
        placas = false;
    }
    if (cmpPlaca == 79) {
        mostrarTexto("lblProvincia", "El oro");
        placas = false;
    }
    if (cmpPlaca == 80) {
        mostrarTexto("lblProvincia", "Pichincha");
        placas = false;
    }
    if (cmpPlaca == 81) {
        mostrarTexto("lblProvincia", "Orellana");
        placas = false;
    }
    if (cmpPlaca == 82) {
        mostrarTexto("lblProvincia", "Los Rios");
        placas = false;
    }
    if (cmpPlaca == 83) {
        mostrarTexto("lblProvincia", "Pastaza");
        placas = false;
    }
    if (cmpPlaca == 84) {
        mostrarTexto("lblProvincia", "Tungurahua");
        placas = false;
    }
    if (cmpPlaca == 85) {
        mostrarTexto("lblProvincia", "Cañar");
        placas = false;
    }
    if (cmpPlaca == 86) {
        mostrarTexto("lblProvincia", "Morona Santiago");
        placas = false;
    }
    if (cmpPlaca == 87) {
        mostrarTexto("lblProvincia", "Galapagos");
        placas = false;
    }
    if (cmpPlaca == 88) {
        mostrarTexto("lblProvincia", "Cotopaxi");
        placas = false;
    }
    if (cmpPlaca == 89) {
        mostrarTexto("lblProvincia", "Santa Elena");
        placas = false;
    }
    if (cmpPlaca == 90) {
        mostrarTexto("lblProvincia", "Zamora Chinchipe");
        placas = false;
    }

    return !placas;

}