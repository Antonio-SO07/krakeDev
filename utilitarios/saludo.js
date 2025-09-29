saludar=function(){
    //recuperar el valor de la caja de texto txt nombre
    let nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txt apellido
    let apellido=recuperarTexto("txtApellido");
    //recuperar el valor de la caja de texto txt edad
    let edad=recuperarInt("txtEdad");
    //recuperar el valor de la caja de texto txt estarura
    let estatura=recuperarFloat("txtEstatura");

    let mensajeBienvenida="Bienvenido "+nombre+" "+apellido;

    mostrarTexto("lblResultado",mensajeBienvenida)

    mostrarImagen("imgSaludo","./imagenes/oli.gif")

    mostrarTextoEnCaja("txtNombre","")
}


