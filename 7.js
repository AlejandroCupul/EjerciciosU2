//Ejercicio 7. Teléfonos
let mensaje = "Número telefónico válido: 9851065040, +529851065040. Números telefónicos inválidos: 11122233445, +5266677788990.";
let newMensaje = mensaje.replace(/\b[\d]{10}[., ]|\b[+]?[\d]{12}[., ]/g, "");
console.log(newMensaje);