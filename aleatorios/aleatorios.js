generarNumeroAleatorio = function () {
    return Math.floor(Math.random() * 100) + 1;
}
generarAleatorios = function () {
    const inputUsuario = document.getElementById("cantidad").value;
    const cantidad = parseInt(inputUsuario, 10);


    if (isNaN(cantidad) || cantidad < 5 || cantidad > 20) {
        alert("Por favor ingrese un numero entre 5 y 20.");
        return;
    }


    let aleatorios = [];


    for (let i = 0; i < cantidad; i++) {
        console.log(i);
        let numeroAleatorio = generarNumeroAleatorio();
        aleatorios.push(numeroAleatorio);
        mostrarResultados(aleatorios);
    }

}

mostrarResultados = function (arregloNumeros) {
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table '><tr><th>Numero Aleatorio</th></tr>";


    for (let i = 0; i < arregloNumeros.length; i++) {
        contenidoTabla += "<tr><td>" + arregloNumeros[i] + "</td></tr>";
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}
