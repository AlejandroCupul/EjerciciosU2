//Ejercicio 3. Las palabras que inicien con M donde la segunda letra no sea vocal.
let mensaje = "My name is Marco but I am not mr. Marco or MCMarco :v";
let newMensaje = mensaje.replace(/\b[Mm][^aeiouAEIOU][a-zA-z]*/g, ""); //\b[Mm][^aeiouAEIOU][a-zA-z]*|.[Mm][^aeiouAEIOU]
console.log(newMensaje);