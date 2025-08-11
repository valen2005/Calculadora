const readlineSync = require("readline-sync");
//Importación de módulo: Aquí importamos la librería readline-sync que nos permite leer entrada del usuario desde la consola de forma síncrona. Esta librería debe instalarse previamente con npm.

let numero1;
let numero2; 
let operacion; 

function sumar(a, b) { 
return a + b; 
} 
// Función sumar: Declaramos una función que recibe dos parámetros a y b, y retorna la suma de ambos. Es una función pura sin efectos secundarios.

// Función para restar dos números 
function restar(a, b) { 
return a - b; 
} 

// Función para multiplicar dos números 
function multiplicar(a, b) { 
return a * b; 
} 
//Funciones restar y multiplicar: Siguiendo el mismo patrón, declaramos funciones para las operaciones básicas de resta y multiplicación.

// Función para dividir dos números 
function dividir(a, b) { 
// Manejo básico de la división por cero 
if (b === 0) { 
return "Error: No se puede dividir por cero."; 
} else { 
return a / b; 
} 
} 
//Función dividir con validación: Esta función incluye una validación importante: verifica si el divisor es cero antes de realizar la operación, evitando errores matemáticos.

function iniciarCalculadora() { 
console.log("\n--- Calculadora Simple en JavaScript ---"); 
//Función principal: Iniciamos la función principal que contiene toda la lógica de la calculadora. Mostramos un título en consola.
 
let input1 = readlineSync.question("Ingresa el primer número: ")
 //Captura del primer número: Pedimos al usuario el primer número como string y lo convertimos a número decimal usando parseFloat().
let numero1 = parseFloat(input1); 

 


  if (isNaN(numero1)) { 
console.log("Error: El primer valor ingresado no es un número válido."); 
return;
  }
 //Validación de entrada: Verificamos si la conversión fue exitosa usando isNaN(). Si no es un número válido, mostramos error y terminamos la función con return.

operacion = readlineSync.question("Ingresa la operación (+, -, *, /): "); 
// Solicitar el segundo número 
let input2 = readlineSync.question("Ingresa el segundo número: ");
let numero2 = parseFloat(input2); // Convertir la entrada a número flotante 
// Validar si la entrada es un número válido 
if (isNaN(numero2)) { 
console.log("Error: El segundo valor ingresado no es un número válido."); 
return; // Salir de la función si hay un error 
} 
 //Captura y validación del segundo número: Repetimos el mismo proceso para el segundo número, incluyendo la validación correspondiente.
let resultado; 
// Usar una estructura condicional (switch) para decidir qué operación realizar 
 //Control de flujo con switch: Utilizamos una estructura switch para ejecutar la operación correspondiente según la entrada del usuario. El default maneja casos no válidos.
switch (operacion) { 
//Captura de operación: Pedimos al usuario que seleccione la operación matemática a realizar.
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
//Mostrar resultado y ejecutar: Mostramos el resultado al usuario, cerramos la función y finalmente ejecutamos la calculadora llamando a iniciarCalculadora().
