const readlineSync = require("readline-sync");

let numero1;
let numero2; 
let operacion; 

function sumar(a, b) { 
return a + b; 
} 

// Función para restar dos números 
function restar(a, b) { 
return a - b; 
} 

// Función para multiplicar dos números 
function multiplicar(a, b) { 
return a * b; 
} 

// Función para dividir dos números 
function dividir(a, b) { 
// Manejo básico de la división por cero 
if (b === 0) { 
return "Error: No se puede dividir por cero."; 
} else { 
return a / b; 
} 
} 

function iniciarCalculadora() { 
console.log("\n--- Calculadora Simple en JavaScript ---"); 
let input1 = readlineSync.question("Ingresa el primer número: ")
let numero1 = parseFloat(input1); 

 


  if (isNaN(numero1)) { 
console.log("Error: El primer valor ingresado no es un número válido."); 
return;
  }

operacion = readlineSync.question("Ingresa la operación (+, -, *, /): "); 
// Solicitar el segundo número 
let input2 = readlineSync.question("Ingresa el segundo número: ");
let numero2 = parseFloat(input2); // Convertir la entrada a número flotante 
// Validar si la entrada es un número válido 
if (isNaN(numero2)) { 
console.log("Error: El segundo valor ingresado no es un número válido."); 
return; // Salir de la función si hay un error 
} 
let resultado; 
// Usar una estructura condicional (switch) para decidir qué operación realizar 
switch (operacion) { 
case '+': 
resultado = sumar(numero1, numero2); 
break; 
case '-': 
resultado = restar(numero1, numero2); 
break; 
case '*': 
resultado = multiplicar(numero1, numero2); 
break; 
case '/': 
resultado = dividir(numero1, numero2); 
break; 
default: 
resultado = "Operación no válida. Por favor, usa +, -, * o /."; 
} 
console.log("\nEl resultado es: " + resultado); 
console.log("---------------------------------------\n"); 
} 

iniciarCalculadora()