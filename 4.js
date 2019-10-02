//Ejercicio 4
let mensaje = "Expresiones 'encerradas' entre 'comillas'";
let newMensaje = mensaje.replace(/'[\w]*'|'[\W]*'/g, "");
console.log(newMensaje);