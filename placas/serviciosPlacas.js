validarEstructura = function (placa) {
    let errores = false;
    if (placa.length != 7 && placa.length != 8) {
        mostrarTexto("lblErrorPlaca","La placa debe tener 7 u 8 caracteres.");
        errores = true;
    } else {
        if(!esMayuscula(placa[0])){
            mostrarTexto("lblErrorPlaca","El primer caracter debe ser una letra mayúscula.");
            errores = true;
        }
        if(!esMayuscula(placa[1])){
            mostrarTexto("lblErrorPlaca","El segundo caracter debe ser una letra mayúscula.");
            errores = true;
        }
        if(!esMayuscula(placa[2])){
            mostrarTexto("lblErrorPlaca","El tercer caracter debe ser una letra mayúscula.");
            errores = true;
        }
        if(!esGuion(placa[3])){
            mostrarTexto("lblErrorPlaca","El cuarto caracter debe ser un guion.");
            errores = true;
        }
        if(!esDigito(placa[4])){
            mostrarTexto("lblErrorPlaca","El quinto caracter debe ser un dígito.");
            errores = true;
        }
        if(!esDigito(placa[5])){
            mostrarTexto("lblErrorPlaca","El sexto caracter debe ser un dígito.");
            errores = true;
        }
        if(!esDigito(placa[6])){
            mostrarTexto("lblErrorPlaca","El séptimo caracter debe ser un dígito.");
            errores = true;
        }
        if(placa.length == 8 && !esDigito(placa[7])){
            mostrarTexto("lblErrorPlaca","El octavo caracter debe ser un dígito.");

        }
    }
    if(errores == false ){
        mostrarTexto("lblErrorPlaca","")
        mostrarTexto("lblValidacion","")
    }
   return !errores;
}
