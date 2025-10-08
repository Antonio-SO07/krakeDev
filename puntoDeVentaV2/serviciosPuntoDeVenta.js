
calcularDescuentoPorVolumen=function(subtotal,cantidad){
    let descuento = 0;
    if(cantidad<3){
        descuento = 0;
    }else if(cantidad>=3 && cantidad<=5){
        descuento = subtotal * 3/100;
    }else if(cantidad>=6 && cantidad<=11){
        descuento = subtotal * 4/100;
    }else if(cantidad>=12){
        descuento = subtotal * 5/100;
    }
    return descuento;
}


calcularIva = function (monto) {
    let iva;
    let cmpIva;
    iva = monto * 12 / 100;
    cmpIva = iva;
    return cmpIva;
}


calcularSubTotal = function (precio, cantidad) {
    let subTotal;
    let cmpSubTotal;
    subTotal = precio * cantidad;
    cmpSubTotal = subTotal;
    return cmpSubTotal;
}


calcularTotal = function (subTotal, descuento, iva) {
    let total;
    let cmpTotal;
    total = subTotal - descuento + iva;
    cmpTotal = total;
    return total;
}


