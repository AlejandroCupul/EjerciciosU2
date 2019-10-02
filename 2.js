//Ejercicio 2
let mensaje = "Expresiones que no finalicen con una vocal";
let newMensaje = mensaje.replace(/[a-zA-Z]+[^aeiouAEIOU]\s|[a-zA-Z]+[^aeiouAEIOU]$/g, "");
console.log(newMensaje);