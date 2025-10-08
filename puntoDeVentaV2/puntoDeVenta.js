
calcularValorTotal = function () {
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    nombreProducto = recuperarTexto("txtProducto1");
    precioProducto = recuperarFloat("txtPrecio1");
    cantidad = recuperarInt("txtCantidad1");
    if (esProductoValido(nombreProducto, "lblErrorProducto") & esCantidadValida(cantidad, "lblErrorCantidad") & esPrecioValido(precioProducto, "lblErrorPrecio")) {
        valorSubtotal = calcularSubTotal(precioProducto, cantidad);
        mostrarTexto("lblSubTotal1", valorSubtotal);
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad)
        mostrarTexto("lblDescuento1", valorDescuento);
        valorIVA = calcularIva(valorSubtotal);
        mostrarTexto("lblValorIVA1", valorIVA);
        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        mostrarTexto("lblTotal1", valorTotal);
    }

}


esProductoValido = function (producto, idComponenteProducto) {
    let hayErrores = false;
    if (!producto) {
        mostrarTexto(idComponenteProducto, "CAMPO OBLIGATORIO");
        hayErrores = true;
    }
    if (producto.length > 10) {
        mostrarTexto(idComponenteProducto, "Maximo 10 caracteres");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteProducto, "");
    }
    return !hayErrores;
}

esCantidadValida = function (cantidad, idComponenteCantidad) {
    let errores = false;
    if (isNaN(cantidad)) {
        mostrarTexto(idComponenteCantidad, "CAMPO OBLIGATORIO");
        errores = true;
    }
    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(idComponenteCantidad, "La cantidad debe ser entre 0 y 100");
        errores = true;
    }
    if (errores == false) {
        mostrarTexto(idComponenteCantidad, "");
    }
    return !errores;
}

esPrecioValido = function (precio, idComponentePrecio) {
    let precioError = false;
    if (isNaN(precio)) {
        mostrarTexto(idComponentePrecio, "CAMPO OBLIGATORIO");
        precioError = true;
    }
    if (precio < 0 || precio > 50) {
        mostrarTexto(idComponentePrecio, "La cantidad debe ser entre 0 y 50");
        precioError = true;
    }
    if (precioError == false) {
        mostrarTexto(idComponentePrecio, "");
    }
    return !precioError;

}


limpiar = function () {
    mostrarTextoEnCaja("txtProducto1","");
    mostrarTextoEnCaja("txtCantidad1","");
    mostrarTextoEnCaja("txtPrecio1","");
    mostrarTexto("lblSubTotal1","0.0");
    mostrarTexto("lblDescuento1","0.0");
    mostrarTexto("lblValorIVA1","0.0");
    mostrarTexto("lblTotal1","0.0");
}
