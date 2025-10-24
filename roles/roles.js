let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1750816322", nombre: "Alejo", apellido: "Salcedo", sueldo: 800.0 }
]

let esNuevo = false;

mostrarOpcionEmpleado = function () {

    mostrarComponente('divEmpleado');
    ocultarComponente('divRol');
    ocultarComponente('divResumen');
    mostrarEmpleados();
}

mostrarOpcionRol = function () {

    mostrarComponente('divRol');
    ocultarComponente('divEmpleado');
    ocultarComponente('divResumen');
}

mostrarOpcionResumen = function () {

    mostrarComponente('divResumen');
    ocultarComponente('divRol');
    ocultarComponente('divEmpleado');
}


mostrarEmpleados = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");

    let contenidoTabla = "<table>" +
        "<tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>";

    for (let i = 0; i < empleados.length; i++) {
        let emp = empleados[i];
        contenidoTabla += "<tr>" +
            "<td>" + emp.cedula + "</td>" +
            "<td>" + emp.nombre + "</td>" +
            "<td>" + emp.apellido + "</td>" +
            "<td>" + emp.sueldo.toFixed(2) + "</td>" +
            "</tr>";
    }

    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

ejecutarNuevo = function () {
    habilitarComponentesEmpleado();
    esNuevo = true;
}

modificarEmpleado = function (empleado) {
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula === empleado.cedula) {
            empleados[i].nombre = empleado.nombre;
            empleados[i].apellido = empleado.apellido;
            empleados[i].sueldo = empleado.sueldo;
            return true;
        }
    }
    return false;
}

buscarEmpleado = function (cedula) {
    for (let i = 0; i < empleados.length; i++) {
        let emp = empleados[i];
        if (emp.cedula === cedula) {
            return emp;
        }
    }
    return null;
}



agregarEmpleado = function (empleado) {
    let existe = buscarEmpleado(empleado.cedula);
    if (existe) {
        return false;
    } else {
        empleados.push(empleado);
        return true;
    }
}

guardar = function () {
    let cedula = recuperarTexto('txtCedula');
    let nombre = recuperarTexto('txtNombre');
    let apellido = recuperarTexto('txtApellido');
    let sueldoTexto = recuperarTexto('txtSueldo');
    let sueldo = recuperarFloat('txtSueldo');

    mostrarTexto('lblErrorCedula', '');
    mostrarTexto('lblErrorNombre', '');
    mostrarTexto('lblErrorApellido', '');
    mostrarTexto('lblErrorSueldo', '');

    let hayErrores = false;

    if (cedula.length !== 10 || isNaN(cedula)) {
        mostrarTexto('lblErrorCedula', 'DEBE TENER 10 DÍGITOS');
        hayErrores = true;
    }

    if (nombre.length < 3 || nombre !== nombre.toUpperCase() || /[0-9]/.test(nombre) || nombre.trim() === '') {
        mostrarTexto('lblErrorNombre', 'AL MENOS 3 CARACTERES, TODOS MAYÚSCULAS');
        hayErrores = true;
    }

    if (apellido.length < 3 || apellido !== apellido.toUpperCase() || /[0-9]/.test(apellido) || apellido.trim() === '') {
        mostrarTexto('lblErrorApellido', 'AL MENOS 3 CARACTERES, TODOS MAYÚSCULAS');
        hayErrores = true;
    }

    if (sueldoTexto.trim() === '') {
        mostrarTexto('lblErrorSueldo', 'CAMPO OBLIGATORIO');
        hayErrores = true;
    } else if (isNaN(sueldo)) {
        mostrarTexto('lblErrorSueldo', 'DEBE SER UN NÚMERO FLOTANTE');
        hayErrores = true;
    } else if (sueldo < 400 || sueldo > 5000) {
        mostrarTexto('lblErrorSueldo', 'ENTRE 400 Y 5000 INCLUIDOS');
        hayErrores = true;
    }

    if (hayErrores) {
        return;
    }

    let empleadoAGuardar = {
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        sueldo: sueldo
    };

    if (esNuevo) {
        let agregado = agregarEmpleado(empleadoAGuardar);

        if (agregado) {
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrarEmpleados();
            deshabilitarComponentesEmpleado();
            esNuevo = false;
        } else {
            alert("YA EXISTE UN EMPLEADO CON LA CÉDULA " + cedula);
        }
    } else {
        let empleadoEncontrado = buscarEmpleado(cedula);

        if (empleadoEncontrado) {
            modificarEmpleado(empleadoAGuardar);
            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
            mostrarEmpleados();
            deshabilitarComponentesEmpleado();
            esNuevo = false;
        } else {
            alert("ERROR: EMPLEADO NO ENCONTRADO PARA MODIFICAR.");
        }
    }
}

deshabilitarComponentesEmpleado = function () {
    deshabilitarComponente('txtCedula');
    deshabilitarComponente('txtNombre');
    deshabilitarComponente('txtApellido');
    deshabilitarComponente('txtSueldo');
    deshabilitarComponente('btnGuardar');
}


habilitarComponentesEmpleado = function () {
    habilitarComponente('txtCedula');
    habilitarComponente('txtNombre');
    habilitarComponente('txtApellido');
    habilitarComponente('txtSueldo');
    habilitarComponente('btnGuardar');
}

ejecutarBusqueda = function () {
    limpiar();
    deshabilitarComponentesEmpleado();
    habilitarComponente('txtBusquedaCedula');

    let cedulaBusqueda = recuperarTexto('txtBusquedaCedula');
    let empleadoEncontrado = buscarEmpleado(cedulaBusqueda);

    if (empleadoEncontrado === null) {
        alert("EMPLEADO NO EXISTE");
        mostrarTexto('lblErrorBusqueda', 'EMPLEADO NO EXISTE');
        return;
    }

    mostrarTextoEnCaja('txtCedula', empleadoEncontrado.cedula);
    mostrarTextoEnCaja('txtNombre', empleadoEncontrado.nombre);
    mostrarTextoEnCaja('txtApellido', empleadoEncontrado.apellido);
    mostrarTextoEnCaja('txtSueldo', empleadoEncontrado.sueldo);

    habilitarComponente('txtNombre');
    habilitarComponente('txtApellido');
    habilitarComponente('txtSueldo');
    deshabilitarComponente('txtCedula');
    habilitarComponente('btnGuardar');
    esNuevo = false;
}



limpiar = function () {
    mostrarTextoEnCaja('txtCedula', '');
    mostrarTextoEnCaja('txtNombre', '');
    mostrarTextoEnCaja('txtApellido', '');
    mostrarTextoEnCaja('txtSueldo', '');
    mostrarTexto('lblErrorCedula', '');
    mostrarTexto('lblErrorNombre', '');
    mostrarTexto('lblErrorApellido', '');
    mostrarTexto('lblErrorSueldo', '');
    mostrarTexto('lblErrorBusqueda', '');
    esNuevo = false;
    deshabilitarComponentesEmpleado();
    habilitarComponente('txtBusquedaCedula');
}