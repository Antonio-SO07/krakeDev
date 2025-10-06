let puntos;
puntos=0;
let lanzamientos;
lanzamientos=5;



jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
}


modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos",puntos);
    if(puntos>20){
        cambiarTexto("oli","GANASTE!!!");
        limpiar();
    }
    //si el jugador obtiene mas de 20 puntos
    //mostrar un mensaje ganaste!!
    //volver a poner puntaje en 0 y lanzamientos en 5
}
//no recibe parametros
//resta 1 a la variable lanzamientos, guarda el resultado en la misma variable 
//y muestra en pantalla 
modificarLanzamientos=function(){
    lanzamientos=lanzamientos-1;
    cambiarTexto("lblLanzamientos",lanzamientos);
    if(lanzamientos==0){
        cambiarTexto("oli","PERDISTEEE :(");
        limpiar();
    }
    //si lanzamientos llega a 0
    //mostrar game over 
    //invoca a limpiar
}


limpiar=function(){
    puntos=puntos*0;
    lanzamientos=lanzamientos=5;
    cambiarTexto("lblPuntos",puntos)
    cambiarTexto("lblLanzamientos",lanzamientos)
    cambiarImagen("imgDado","")
    //colocar en 0 y 5
    //en las variables y en pantalla
    //quitar la imagen
}

//funcion mostrar cara, recibe el numero que quiere mostrar
//muestra la imagen que recibe 
//no retorna nada 
mostrarCara=function(numero){
    if(numero==1){//con == se compara con = se asigna
        cambiarImagen("imgDado","dados1.png");
    }else if(numero==2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero==3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero==4){
        cambiarImagen("imgDado","dados4.png");
    }else if(numero==5){
        cambiarImagen("imgDado","dados5.png");
    }else if(numero==6){
        cambiarImagen("imgDado","dados6.png");
    }
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}