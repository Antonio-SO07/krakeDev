calcularTasaInteres=function(ingresoAnual){
    let ingreso;
    ingreso=recuperarFloat(ingresoAnual);
    if(ingreso<300000){
        return ingreso * 16/100;
    }else if(ingreso>=300000 && ingreso<500000){
        return ingreso * 15/100;
    }else if(ingreso>=500000 && ingreso<1000000){
        return ingreso * 14/100;
    }else if(ingreso>=1000000 && ingreso<2000000){
        return ingreso * 13/100;
    }else if(ingreso>2000000){
        return ingreso * 12/100;
    }
}


calcularCapacidadPago=function(edad,ingreso,egreso){
    let cmpEdad;
    let cmpIngreso;
    let cmpEgreso;
    let sobra;
    cmpEdad=recuperarInt(edad);
    cmpIngreso=recuperarFloat(ingreso);
    cmpEgreso=recuperarFloat(egreso);
    sobra=cmpEgreso-cmpIngreso;
    if(cmpEdad>50){
        return sobra * 30/100;
    }else if(cmpEdad<=50){
        return sobra * 40/100;
    }
}


calcularDescuento=function(precio,cantidad){
    let cmpPrecio;
    let cmpCantidad;
    let total;
    cmpPrecio=recuperarFloat(precio);
    cmpCantidad=recuperarInt(cantidad);
    total=cmpPrecio*cmpCantidad;
    if(cmpCantidad<=3){
        return "no hay descuento"
    }else if(cmpCantidad>=3 && cmpCantidad<=5){
        return total-total*2/100;
    }else if(cmpCantidad>=6 && cmpCantidad<=11){
        return total-total*3/100;
    }else if(cmpCantidad>=12){
        return total-total*4/100;
    }
}



determinarColesterolLDL=function(nivelColesterol){
    let colesterol;
    colesterol=recuperarFloat(nivelColesterol);
    if(colesterol<100){
        return "optimo";
    }else if(colesterol>=100 && colesterol<=129){
        return "casi optimo";
    }else if(colesterol>=130 && colesterol<=159){
        return "limite alto";
    }else if(colesterol>=160 && colesterol<=189){
        return "alto";
    }else if(colesterol>=190){
        return "muy alto";
    }
}



validarClave=function(clave){
    let contra;
    contra=clave.length;
    if(contra>=8 && contra<=16){
        return true;
    }else{
        return false;
    }
}



esMayuscula=function(caracter){
    let letra;
    let cmpCarac;
    letra=recuperarTexto(caracter);
    cmpCarac=letra.charCodeAt(0);
    if(cmpCarac>=65 && cmpCarac<=90){
        return true;
    }else{
        return false;
    }
}



esMinuscula=function(caracter){
    let letra;
    let cmpCarac;
    letra=recuperarTexto(caracter);
    cmpCarac=letra.charCodeAt(0);
    if(cmpCarac>=97 && cmpCarac<=122){
        return true;
    }else{
        return false;
    }
}



esDigito=function(caracter){
    let letra;
    let cmpCarac;
    letra=recuperarTexto(caracter);
    cmpCarac=letra.charCodeAt(0);
    if(cmpCarac>=48 && cmpCarac<=57){
        return true;
    }else{
        return false;
    }
}



darPermiso=function(notaM,notaF,notaG){
    let notaMate;
    let notaFisi;
    let notaGeo;
    notaMate=recuperarFloat(notaM);
    notaFisi=recuperarFloat(notaF);
    notaGeo=recuperarFloat(notaG);
    if(notaMate>90 || notaFisi>90 || notaGeo>90){
        return true;
    }else{
        return false;
    }
}



otorgarPermiso=function(notaM,notaF,notaG){
    let notaMate;
    let notaFisi;
    let notaGeo;
    notaMate=recuperarFloat(notaM);
    notaFisi=recuperarFloat(notaF);
    notaGeo=recuperarFloat(notaG);
    if(notaMate>90 || notaFisi>90 && notaGeo>80){
        return true;
    }else{
        return false;
    }
}



dejarSalir=function(notaM,notaF,notaG){
    let notaMate;
    let notaFisi;
    let notaGeo;
    notaMate=recuperarFloat(notaM);
    notaFisi=recuperarFloat(notaF);
    notaGeo=recuperarFloat(notaG);
    if(notaMate>90 || notaFisi>90 || notaGeo>80 && notaFisi>notaMate){
        return true;
    }else{
        return false;
    }
}
