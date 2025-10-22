ejecutarValidacion=function() {
  let password = recuperarTexto("txtPassword");
  let resultado = validarPassword(password);

  if (resultado == true) {
    mostrarTexto("lblResultado","password valida");
  } else {
        mostrarTexto("lblResultado","password incorrecta");
  }
}




validarPassword=function (password) {
  let errores = false;

  if (password.length < 8) {
    mostrarTexto("lblLongitud","La contraseña no puede tener menos de 8 caracteres.");
    errores = true;
  }
  if (password.length > 16) {
    mostrarTexto("lblLongitud","La contraseña no puede tener mas de 16 caracteres.");
    errores = true;
  }

  let tieneMayuscula = false;
  for (let i = 0; i < password.length; i++) {
    let char = password.charAt(i);
    if (char >= 'A' && char <= 'Z') {
      tieneMayuscula = true;;
    }
  }
  if (!tieneMayuscula) {
    mostrarTexto("lblMayuscula","La contraseña debe contener al menos una letra mayúscula.");
    errores = true;
  }


  let tieneDigito = false;
  for (let i = 0; i < password.length; i++) {
    let char = password.charAt(i);
    if (char >= '0' && char <= '9') {
      tieneDigito = true;
    }
  }
  if (!tieneDigito) {
    mostrarTexto("lblDigito","La contraseña debe contener al menos un número.");
    errores = true;
  }


  let tieneEspecial = false;
  const especiales = ["*", "-", "_"];
  for (let i = 0; i < password.length; i++) {
    if (especiales.includes(password.charAt(i))) {
      tieneEspecial = true;
    }
  }
  if (!tieneEspecial) {
    mostrarTexto("lblCaracterEspecial","La contraseña debe contener al menos un carácter especial (*, - o _).")
    errores = true;
  }
  if(errores== false ){
    mostrarTexto("lblLongitud","");
    mostrarTexto("lblMayuscula","");
    mostrarTexto("lblDigito","");
    mostrarTexto("lblCaracterEspecial","");
  }


  return !errores;
}

