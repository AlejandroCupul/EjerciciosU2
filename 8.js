//Ejercicio 8. Correo electrónico
let mensaje = "Mis correos electrónicos son: marco.cupulhau@itsva.edu.mx y marcoalejandro298@gmail.com";
let newMensaje = mensaje.replace(/\s[\w.]*[@][\w.]*/g, "");
console.log(newMensaje);