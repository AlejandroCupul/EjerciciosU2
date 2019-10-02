//Ejercicio 6. Horas
let mensaje = "Algunos ejemplos de hora pueden ser 12:30:05, 20:45, ó 00:00. Una hora no puede ser 15:00:900 o 200.50.55.";
let newMensaje = mensaje.replace(/\b[\d]{1,2}[:][\d]{1,2}[:][\d]{1,2}[., ]|\b[\d]{1,2}[:][\d]{1,2}[., ]/g, "");
console.log(newMensaje);