/*let nombre = "Variable Global";

function ejemploShadowing() {
let nombre = "Variable Local"; // Esta variable sombrea la global
console.log(nombre); // "Variable Local"
}

ejemploShadowing(); // "Variable Local"
console.log(nombre); // "Variable Global" - la variable global no se ve afectada

function ejemploVar() {
if (true) {
var x = 10; // Declarada dentro de un bloque
console.log(x); // 10
}
console.log(x); // 10 - ¡Sigue siendo accesible fuera del bloque!
}
ejemploVar();

var contador = 5;
var contador = 20; // No genera error, pero puede ser problemático
console.log(contador); // 10


let contador = 5;
let contador = 30; // No genera error, pero puede ser problemático
console.log(contador); // 10 

function ejemploLetConst() {
  if (true) {
    let y = 20;
    const z = 30;
    console.log(y); // 20
    console.log(z); // 30
  }
  // console.log(y); // Error: y is not defined
  // console.log(z); // Error: z is not defined
}
ejemploLetConst();

let variable = "Puedo cambiar";
variable = "He cambiado"; // Válido
const constante = "No puedo cambiar";
// constante = "Intento cambiar"; // Error: Assignment to constant variable
console.log(variable);
console.log(constante);

function demostracionScopeBloque() {
  let mensaje = "Scope de función";
  if (true) {
    let mensaje = "Scope de bloque if"; // Variable diferente
    console.log(mensaje); // "Scope de bloque if"
    {
      let mensaje = "Scope de bloque anidado"; // Otra variable diferente
      console.log(mensaje); // "Scope de bloque anidado"
    }
    console.log(mensaje); // "Scope de bloque if"
  }
  console.log(mensaje); // "Scope de función"
}
demostracionScopeBloque()


console.log(variableVar); // undefined (no error)
var variableVar = "Hola";
console.log(variableVar); // "Hola" */

console.log(variableLet); // Error: Cannot access 'variableLet' before initialization
let variableLet = "Hola";
console.log(variableLet); // "Hola" 