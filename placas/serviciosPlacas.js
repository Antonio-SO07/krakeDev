validarEstructura = function (placa) {
    let errores = false;
    if (placa.length != 7 && placa.length != 8) {
        mostrarTexto("idcomponente","La placa debe tener 7 u 8 caracteres.");
        errores = true;
    } else {
        if(!esMayuscula(placa[0])){

        }
        if(!esMayuscula(placa[1])){

        }
        if(!esMayuscula(placa[2])){

        }
        if(!esGuion(placa[3])){

        }
        if(!esDigito(placa[4])){

        }
        if(!esDigito(placa[5])){

        }
        if(!esDigito(placa[6])){

        }
        if(placa.length == 8 && placa.length !=7){
            
        }
    }
}













validarEstructura = function (placa) {
    const errores = [];

    if (placa.length != 7 && placa.length != 8) {
        errores.push("La placa debe tener 7 u 8 caracteres.");
    } else {
        if (!esMayuscula(placa[0])) errores.push("El primer caracter debe ser una letra mayúscula.");
        if (!esMayuscula(placa[1])) errores.push("El segundo caracter debe ser una letra mayúscula.");
        if (!esMayuscula(placa[2])) errores.push("El tercer caracter debe ser una letra mayúscula.");
        if (!esGuion(placa[3])) errores.push("El cuarto caracter debe ser un guion.");
        if (!esDigito(placa[4])) errores.push("El quinto caracter debe ser un dígito.");
        if (!esDigito(placa[5])) errores.push("El sexto caracter debe ser un dígito.");
        if (!esDigito(placa[6])) errores.push("El séptimo caracter debe ser un dígito.");
        if (placa.length == 8 && !esDigito(placa[7])) {
            errores.push("El octavo caracter debe ser un dígito.");
        }
    }

    if (errores.length > 0) {
        alert(errores.join("\n"));
        return errores.join(" ");
    }

    return null;
}
