let puntosUsuario = 0;
let puntosComputadora = 0;

jugar = function (seleccionado) {
    console.log(seleccionado);
    let resultado = generarElemento();
    let ruta=generarRuta(resultado);
    let ganador = determinarGanador(seleccionado, resultado);
    mostrarImagen("imagenSeleccionada",ruta);
    if (ganador == 0) {
        mostrarTexto("lblResultado", "EMPATE");

    } else if (ganador == 1) {
        mostrarTexto("lblResultado", "GANASTE");
        mostrarTexto("puntosUsuario",puntosUsuario=puntosUsuario + 1)
    } else if (ganador == 2) {
        mostrarTexto("lblResultado", "PERDISTE");
        mostrarTexto("puntosComputador",puntosComputadora=puntosComputadora + 1)
    }
    if(puntosUsuario == 5){
        mostrarTexto("lblGanador", "HAS GANADO EL JUEGO");
    }else if(puntosComputadora == 5){
        mostrarTexto("lblGanador", "COMPUTADOR TE HA VENCIDO");
    }
}


limpiar = function () {
    puntosUsuario=0;
    puntosComputadora=0;
    mostrarImagen("imagenSeleccionada","");
    mostrarTexto("lblResultado","");
    mostrarTexto("puntosUsuario","0");
    mostrarTexto("puntosComputador","0");
    mostrarTexto("lblGanador","");

}

