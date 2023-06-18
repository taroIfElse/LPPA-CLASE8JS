//1
//A
let num1 = 2;
let num2 = 3;
let sum = num1 + num2;
console.log(sum);
//B
let hello = "Hello";
let world = "World!";
let hW = hello + " " + world;
//C
let lengthHello = hello.length();
let lengthWorld = world.length();
let totalLength = lengthHello + lengthWorld;

//2
//A
let str = "Hello World";
let strUpperCase = str.toUpperCase();
//B
let str2B = "HelloWorld!";
let str2BFirst5 = str2B.substring(0, 5);
//C
let strLast3 = str.substring(strLast3.length - 3);
//D
let str2D = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
//E
var str2E = str.indexOf(" ");
//F
var str2F = "hola MUNDO";
var firstWord = str2F.substring(0, str2F.indexOf(" "));
var secondWord = str2F.substring(str2F.indexOf(" ") + 1);
var resultado =
  firstWord.substring(0, 1).toUpperCase() +
  firstWord.substring(1).toLowerCase() +
  " " +
  secondWord.substring(0, 1).toUpperCase() +
  secondWord.substring(1).toLowerCase();

//3
//A
let months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
console.log(meses[4]);
console.log(meses[10]);
//B
months.sort();
console.log(months);
//C
months.unshift("Hol123");
months.push("Chau456");
console.log(months);
//D
months.shift();
months.pop();
console.log(months);
//E
months.reverse();
console.log(months);
//F
let arrayMonths = months.join("-");
console.log(months);
//G
let monthsCopy = months.slice(4, 11);
console.log(monthsCopy);

//4
//A
let numeroRandomxd = Math.random();
if (numeroRandomxd >= 0.5) {
  alert("Greater than 0.5");
} else {
  alert("Lower than 0.5");
}
//B
let age = 21; // Genera un número aleatorio entre 0 y 100
if (age < 2) {
  alert("Bebé");
} else if (age >= 2 && age <= 12) {
  alert("Niño");
} else if (age >= 13 && age <= 19) {
  alert("Adolescente");
} else if (age >= 20 && age <= 30) {
  alert("Joven");
} else if (age >= 31 && age <= 60) {
  alert("Adulto");
} else if (age >= 61 && age <= 75) {
  alert("Adulto mayor");
} else {
  alert("Anciano");
}

//5
//A
let palabras = ["Aprobame", "Profe", "Por", "Favor", "Gracias"];
for (let i = 0; i < palabras.length; i++) {
  alert(palabras[i]);
}
//B
for (let i = 0; i < palabras.length; i++) {
  var palabraModificada =
    palabras[i].charAt(0).toUpperCase() + palabras[i].substring(1);
  alert(palabraModificada);
}
//C
let sentence = "";
for (let i = 0; i < palabras.length; i++) {
  sentence += palabras[i] + " ";
}
alert(sentence);
//D
let numeros = [];
for (let i = 0; i < 10; i++) {
  numeros.push(i);
}
console.log(numeros);

//6
// a.
function suma(num1, num2) {
  return num1 + num2;
}

var resultado = suma(5, 10);
console.log(resultado);

// b.
let suma = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    alert("¡Error! Uno de los parámetros no es un número.");
    return NaN;
  }
  return num1 + num2;
};

let resultado = suma(5, "10");
console.log(resultado);

// c.
let validateInt = (number) => {
  return Number.isInteger(number);
};

// d.
let suma = (num1, num2) => {
  if (!validateInt(num1) || !validateInt(num2)) {
    alert("Uno de los numeros no es entero");
    return Math.round(num1) + Math.round(num2);
  }
  return num1 + num2;
};
let resultado = suma(0.2, 1.5);
console.log(resultado);

// e.
let validateIntE = (number) => {
  return Number.isInteger(number);
};
let suma = (num1, num2) => {
  if (!validateIntE(num1) || !validateIntE(num2)) {
    alert("Uno de los numeros no es entero");
    return Math.round(num1) + Math.round(num2);
  }
  return num1 + num2;
};
