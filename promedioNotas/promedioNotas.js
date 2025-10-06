calcularPromedioNotas=function(){
    let nota1=recuperarFloat("txt1");
    let nota2=recuperarFloat("txt2");
    let nota3=recuperarFloat("txt3");
    let promedio=calcularPromedio(nota1,nota2,nota3);
    let cmpPromedio=promedio.toFixed(2);
    mostrarTexto("lblResultado",cmpPromedio);
    if(cmpPromedio<5 && cmpPromedio>=0){
        mostrarTexto("lblMensaje","REPROBADO");
        mostrarImagen("lblImagen","./imagenes/fracaso.gif");
    }else if(cmpPromedio>=5 && cmpPromedio<=8){
        mostrarTexto("lblMensaje","BUEN TRABAJO");
        mostrarImagen("lblImagen","./imagenes/400.gif");
    }else if(cmpPromedio>8 && cmpPromedio<=10){
        mostrarTexto("lblMensaje","EXCELENTE");
        mostrarImagen("lblImagen","./imagenes/gilcat.gif");
    }else{
        mostrarTexto("lblMensaje","DATOS INCORRECTOS");
        mostrarImagen("lblImagen","./imagenes/error.gif");
    }
}