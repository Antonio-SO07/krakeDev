probarAtributos = function () {
    let persona = {
        nombre: "Juan",
        apellido: "Morales",
        edad: 24,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo == false) {
        console.log("ESTA MUERTO");
    } else {
        console.log("ESTA VIVO");
    }
}


crearProducto = function () {
    let producto1 = {
        nombre: "F1 MX VER",
        precio: 15.0,
        stock: 1
    }
    let producto2 = {
        nombre: "F1 CH LEC",
        precio: 10.0,
        stock: 5
    }
    console.log("NOMBRE PRIMER PRODUCTO" + producto1.nombre);
    console.log("PRECIO DEL SEGUNDO PRODUCTO" + producto2.precio);
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if (producto2.stock > producto1.stock) {
        console.log("Producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }
}


modificarAtributos = function () {
    let cuenta = {
        numero: "51353153131",
        saldo: 0.0,

    }
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}



crearCliente = function () {
    let cliente = {
        cedula: "1202120120",
        nombre: "ALEJO",
    }
    let cliente1 = {}
    cliente1.nombre = "Juan"
    cliente1.apellido = "GOKU"
    cliente1.cedula = "1709986523"

}

probarIncrementoSaldo = function () {
    let cta = { numero: "5131315", saldo: 65.20 }
    incrementarSaldo(cta, 100);
    console.log(cta.saldo);
}


probarDeterminarMayor = function () {
    let per1 = { nombre: "scar", edad: 50 };
    let per2 = { nombre: "ale", edad: 48 };
    let mayor;
    mayor = determinarMayor(per1, per2);
    if (mayor != null) {
        console.log("El mayor es " + mayor.nombre);
    }
}

incrementarSaldo = function (cuenta, monto) {
    cuenta.saldo += monto;
}


determinarMayor = function (persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else if (persona1.edad < persona2.edad) {
        return persona2
    } else {
        return null;
    }
}