let notas = [];


agregarElementos = function () {
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

probarAgregar = function () {
    let cmpNota = recuperarInt("txtNotas");
    agregarNota(cmpNota);
}

agregarNota = function (nota) {
    notas.push(nota);
    mostrarNotas();
}



recorrerArreglo = function () {
    let notaR;
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        console.log(notaR)
    }
}

generarTabla = function () {
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("divTabla");
    contenidoTabla += "<table><tr><td>UNO<td/><tr/>" + 
    "<tr><td>DOS<td/><tr/><table/>"
    cmpTabla.innerHTML = contenidoTabla;
}


mostrarNotas=function(){
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla="<table><td><th>NOTA</th></td>";
    let miNota;
    for(i=0;i<notas.length;i++){
        miNota=notas[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</tr></td>";
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}

calcularPromedio = function () {
    let sumaNotas = 0;
    let promedio;

    for (let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i];
    }

    promedio = sumaNotas / notas.length;
    return promedio;
}



ejecutarPromedio = function () {
    let promedioFinal = calcularPromedio();
    mostrarTexto("lblPromedio", promedioFinal)

}