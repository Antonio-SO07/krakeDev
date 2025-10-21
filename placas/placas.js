validarPlaca = function () {
    let placas = recuperarTexto("txtPlaca");
    console.log(placas);
    let erroresEstructura = validarEstructura(placas);

    if (erroresEstructura == true) {   
        mostrarTexto("lblValidacion","ESTRUCTURA VALIDA");
    } else {
        mostrarTexto("lblValidacion","ESTRUCUTRA INCORRECTA");
    }
}