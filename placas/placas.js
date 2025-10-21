validarPlaca = function () {
    let placas = recuperarTexto("txtPlaca");
    console.log(placas);
    let erroresEstructura = validarEstructura(placas);
    let provincia = obtenerProvincia(placas);

    if (erroresEstructura && provincia == true) {   
        mostrarTexto("lblValidacion","ESTRUCTURA VALIDA");
    } else {
        mostrarTexto("lblValidacion","ESTRUCUTRA INCORRECTA");
    }
    
}