validarPlaca = function () {
    let placas = recuperarTexto("txtPlaca");
    console.log(placas);
    let erroresEstructura = validarEstructura(placas);
    let provincia = obtenerProvincia(placas);
    let vehiculo = obtenerTipoVehiculo(placas);
    let picoYPlaca= obtenerDiaPicoYPlaca(placas);

    if (erroresEstructura && provincia && vehiculo && picoYPlaca == true) {   
        mostrarTexto("lblValidacion","ESTRUCTURA VALIDA");
    } else {
        mostrarTexto("lblValidacion","ESTRUCUTRA INCORRECTA");
    }
    
}

limpiar = function () {
    mostrarTextoEnCaja("txtPlaca","");
    mostrarTexto("lblErrorPlaca","");
    mostrarTexto("lblValidacion","");
    mostrarTexto("lblProvincia","");
    mostrarTexto("lblTipoVehiculo","");
    mostrarTexto("lblPicoYPlaca","");
}
