jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblOkis","ES MAYOR A 3");
        cambiarTexto("lblOkis","GANASTE!!");
    }else{
        cambiarTexto("lblOkis","ES MENOR A 3");
        cambiarTexto("lblOkis","PERDISTE PIPIPI");
    }
}

//crear una funcion llamada lanzar dado
//No recibe parametros
//retorna un numero aleatorio entre 1 y 6
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado); //entre 0 y 5
    valorDado=numeroEntero+1;
    return valorDado;
}
