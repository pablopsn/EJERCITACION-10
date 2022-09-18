const saltodelinea = "<br><br><br>"

let nombre = "Programación" + " Fácil.";
let saludo = "Les doy la bienvenida a ";
let segunda_frase = " ¡Comencemos a programar!"
let fraseCompleta = saludo + nombre + segunda_frase;
console.log(fraseCompleta);
document.write(fraseCompleta + saltodelinea)

let frase = "JavaScript " + "es un lenguaje" + " esencial para crear" + " sitios web poderosos.";
console.log(frase);

let numeroString1 = "10";
let numeroString2 = "20";
let numeroString3 = "30";
let frase_1 = " ahora viene el otro número: "
let concatenaNumeros = numeroString1 + frase_1 + numeroString2 + frase_1 + numeroString3;
console.log(concatenaNumeros);
document.write(concatenaNumeros)

var name = prompt("¿Cuál es tu nombre:?");
var age = prompt("¿Cuál es tu edad:?");
var sex = prompt("Indica con una h si eres hombre o con una m si eres mujer")
console.warn(name + age);
if (sex == "m" && age >= 20){
    alert("Puedes entrar, eres mayor de edad.");
    }else if (sex == "h" && age >= 18){
    alert("Puedes entrar, eres mayor de edad.");
    }else {;
    alert("No puedes entrar, eres menor de edad.");
    }
