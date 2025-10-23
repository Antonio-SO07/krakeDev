let clientes = [
    { cedula: "251131", nombre: "Juan", edad: 25 },
    { cedula: "254845", nombre: "Goku", edad: 26 },
    { cedula: "251154", nombre: "Ale", edad: 21 }
];



guardarCambios=function(){
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");

    let datosCLiente = {};
    datosCLiente.cedula = valorCedula;
    datosCLiente.nombre = valorNombre;
    datosCLiente.edad = valorEdad;

    modificarCliente(datosCLiente);
    mostrarClientes();

}

modificarCliente=function(cliente){
 let clienteEncontrado=buscarCliente(cliente.cedula);
 if(clienteEncontrado!= null){
    clienteEncontrado.nombre=cliente.nombre;
    clienteEncontrado.edad=cliente.edad;
 }

}

crearCliente = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarFloat("txtEdad");
    let nuevoCLiente = {};
    nuevoCLiente.cedula = valorCedula;
    nuevoCLiente.nombre = valorNombre;
    nuevoCLiente.edad = valorEdad;

    agregarCLiente(nuevoCLiente);

}

agregarCLiente = function (cliente) {
    let resultado;
    resultado = buscarCliente(clientes.cedula);
    if (resultado == null) {
        clientes.push(cliente);
        alert("cliente agragado");
        mostrarClientes();
    } else {
        alert("ya existe el cliente con la cedula " + clientes.cedula);
    }

}


ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtCedulaBusqueda");
    let cliente = buscarCliente(valorCedula);
    if(cliente == null){
        alert("cliente no encontrado")
    }else{
        mostrarTextoEnCaja("txtCedula",cliente.cedula)
        mostrarTextoEnCaja("txtNombre",cliente.nombre)
        mostrarTextoEnCaja("txtEdad",cliente.edad)
    }

}

buscarCliente = function (cedula) {
    let elementoCliente;
    let clienteEncontrado = null;
    for (let i=0; i < clientes.length; i++) {
        elementoCliente = clientes[i]
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente
        }
    }
    return clienteEncontrado;

}

mostrarClientes = function () {
    let cmpTabla = document.getElementById("tablaClientes");
    let contenidoTabla = "<table><tr>"
        + "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>" +
        "</tr>";
    let elementoCliente;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla +=
            "<tr><td>" + elementoCliente.cedula + "</td>"
            + "<td>" + elementoCliente.nombre + "</td>"
            + "<td>" + elementoCliente.edad + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;

}