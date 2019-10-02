//Ejercicio 10. Código Postal
let mensaje = "Ejemplos de código postal válidos son: 97780, 89345, los inválidos son: 000000, 234567890";
let newMensaje = mensaje.replace(/\s[\d]{5}[., ]/g, "");
console.log(newMensaje);