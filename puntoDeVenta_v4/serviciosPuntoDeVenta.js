calcularValorDescuento=function(monto,porcentajeDescuento){
    let descuento;
    let cmpDescuento;
    descuento=monto*porcentajeDescuento/100;
    cmpDescuento=descuento;
    return cmpDescuento;
}


calcularIva=function(monto){
    let iva;
    let cmpIva;
    iva=monto*12/100;
    cmpIva=iva;
    return cmpIva;
}


calcularSubTotal=function(precio,cantidad){
    let subTotal;
    let cmpSubTotal;
    subTotal=precio*cantidad;
    cmpSubTotal=subTotal;
    return cmpSubTotal;
}


calcularTotal=function(subTotal,descuento,iva){
    let total;
    let cmpTotal;
    total=subTotal-descuento+iva;
    cmpTotal=total;
    return total;
}