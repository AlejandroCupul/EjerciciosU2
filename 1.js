//Ejercicio 1
let mensaje = "Todas las palabras que tengan una longitud de 7 o más letras";
let newMensaje = mensaje.replace(/[a-z]{7,}/g, "");
console.log(newMensaje);