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


crearProducto=function(){
    let producto1 = {
        nombre : "F1 MX VER",
        precio : 15.0,
        stock : 1
    }
    let producto2 = {
        nombre : "F1 CH LEC",
        precio : 10.0,
        stock : 5
    }
    console.log("NOMBRE PRIMER PRODUCTO"+producto1.nombre);
    console.log("PRECIO DEL SEGUNDO PRODUCTO"+producto2.precio);
    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock");
    } else if (producto2.stock > producto1.stock) {
        console.log("Producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }
}