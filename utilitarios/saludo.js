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


mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src= rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}

mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value=mensaje;
}


recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorEntero=parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorFlotante=parseFloat(valorCaja);
    return valorFlotante;
}