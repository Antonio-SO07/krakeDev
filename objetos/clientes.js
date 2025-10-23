let clientes = [
    {cedula:"251131",nombre:"Juan",edad:25},
    {cedula:"254845",nombre:"Goku",edad:26},
    {cedula:"251154",nombre:"Ale",edad:21}
];

mostrarClientes=function(){
    let cmpTabla=document.getElementById("tablaClientes");
    let contenidoTabla="<table><tr>"
    + "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "</tr>";
    let elementoCliente;
    for(let i=0 ; i < clientes.length; i++){
        elementoCliente=clientes[i];
        contenidoTabla+=
        "<tr><td>"+elementoCliente.cedula+"</td>"
        +"<td>"+elementoCliente.nombre+"</td>"
        +"<td>"+elementoCliente.edad+"</td>"
        +"</tr>" 
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;

}