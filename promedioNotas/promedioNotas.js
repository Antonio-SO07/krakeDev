calcularPromedioNotas=function(){
    let nota1=recuperarFloat("txt1");
    let nota2=recuperarFloat("txt2");
    let nota3=recuperarFloat("txt3");
    let promedio=calcularPromedio(nota1,nota2,nota3);
    let cmpPromedio=promedio.toFixed(2);
    mostrarTexto("lblResultado",cmpPromedio);
    if(cmpPromedio>7){
        mostrarImagen("lblImagen","./imagenes/gilcat.gif")
    }else{
        mostrarImagen("lblImagen","./imagenes/fracaso.gif")
    }
}