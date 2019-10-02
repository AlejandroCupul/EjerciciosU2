//Ejercicio 9. URL
let mensaje = "https://www.google.com, www.google.com y https://www.google.com, htp://google.com, google.com, google.8";
let newMensaje = mensaje.replace(/\bhttp[s]{0,1}:[/]{2}[w]{3}[.][\w]+[.][a-z][.]{0,1}[\w]*|[w]{3}[.][\w]+[.][a-z][.]{0,1}[\w]*/g, ""); //|http[s]{0,1}:[/]{2}[\w]+[.][a-z][.]{0,1}[\w]*
console.log(newMensaje);