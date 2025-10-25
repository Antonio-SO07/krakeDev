let persona = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 5 }
]

agregarPersona = function () {
    let cmpNombre = recuperarTexto("txtNombre");
    let cmpEdad = recuperarInt("txtEdad");
    let error = false;
    if (cmpNombre.length < 3) {
        mostrarTexto("lblErrorNombre", "DEBE TENER MAS DE 3 CARACTERES")
        // alert("DEBE TENER MAS DE 3 CARACTERES");
        error = true;
    }
    if (cmpEdad < 0 || cmpEdad > 100) {
        mostrarTexto("lblErrorEdad", "DEBE SER UN VALOR ENTRE 0 Y 100")
        //alert("DEBE SER UN VALOR ENTRE 0 Y 100");
        error = false;
    }

    let nuevaPersona = {
        nombre: cmpNombre,
        edad: cmpEdad
    }

    persona.push(nuevaPersona);
    mostrarPersonas();
    alert("persona agregada correctamente");
}



mostrarPersonas = function () {
    let cmpTabla = document.getElementById("tablaPersonas");
    let contenidoTabla = "<table border='1'>" +
        "<tr>" +
        "<th>EDAD</th>" +
        "<th>NOMBRE</th>" +
        "</tr>";

    for (let i = 0; i < persona.length; i++) {
        let per = persona[i];
        contenidoTabla += "<tr>" +
            "<td>" + per.edad + "</td>" +
            "<td>" + per.nombre + "</td>" +
            "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

encontrarMayor = function () {
    let personasMayor = persona[0];
    for (let i = 0; i < persona.length; i++) {
        let personaActual = persona[i];
        console.log(personaActual.nombre + " " + personaActual.edad)
        if(personaActual.edad > personasMayor.edad){
            personasMayor = personaActual;
        }
    }
    return personasMayor;
}

determinarMayor=function(){
    let mayor=encontrarMayor();
    console.log("el mas viejito es: "+mayor.nombre+", edad : "+mayor.edad)
}



encontrarMenor=function(){
    let personaMenor = persona[0];
    for (let i = 0; i < persona.length; i++) {
        let personaActual = persona[i];
        console.log(personaActual.nombre + " " + personaActual.edad)
        if(personaActual.edad < personaMenor.edad){
            personaMenor = personaActual;
        }
    }
    return personaMenor;

}

determinarMenor=function(){
    let menor=encontrarMenor();
    console.log("el mas joven es: "+menor.nombre+", edad : "+menor.edad)
}


