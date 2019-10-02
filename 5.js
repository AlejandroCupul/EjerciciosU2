//Ejercicio 5. Ip's
let mensaje = "Una dirección IP válida es 192.168.1.50, ó 123.456.789.123. Una dirección IP inválida puede ser 0.0.0.0 ó 111.111.111.1111";
let newMensaje = mensaje.replace(/\b[1-9]{1,3}[.][\d]{1,3}[.][\d]{1,3}[.][\d]{1,3}[,|. | ]/g, "");
console.log(newMensaje);