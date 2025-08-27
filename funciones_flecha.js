
// Sin parámetros
const saludar = () => "¡Hola!";

// Un solo parámetro (paréntesis opcionales)
const duplicar = x => x * 2;
const duplicarConParentesis = (x) => x * 2;

// Múltiples parámetros
const multiplicar = (a, b) => a * b;

// Cuerpo de función con múltiples líneas
const procesarDatos = (datos) => {
  const procesados = datos.map(item => item * 2);
  const filtrados = procesados.filter(item => item > 10);
  return filtrados;
};

// Retorno de objeto (requiere paréntesis)
const crearPersona = (nombre, edad) => ({
  nombre: nombre,
  edad: edad,
  activo: true
});

// 👇 Llamadas de prueba
console.log(saludar());
console.log(duplicar(5));
console.log(duplicarConParentesis(7));
console.log(multiplicar(3, 4));
console.log(procesarDatos([3, 6, 8, 2]));
console.log(crearPersona("Valentina", 21));


//codigo diferente 

const holi = () => "Hola desde otro programa!";

const triplicar = x => x * 3;
const triplicarConParentesis = (x) => x * 3;

const restar = (a, b) => a - b;

const procesarNumeros = (numeros) => {
  const sumados = numeros.map(item => item + 5);
  const pares = sumados.filter(item => item % 2 === 0);
  return pares;
};

const crearAnimal = (tipo, edad) => ({
  tipo: tipo,
  edad: edad,
  vacunado: false
});

console.log(holi());
console.log(triplicar(4));
console.log(triplicarConParentesis(6));
console.log(restar(15, 8));
console.log(procesarNumeros([2, 7, 10, 3]));
console.log(crearAnimal("Perro", 3));


//codigo dos 

// Función tradicional
function sumar(a, b) {
  return a + b;
}

// Función flecha equivalente
const sumarFlecha = (a, b) => a + b;

console.log(sumar(3, 4));       // 7
console.log(sumarFlecha(3, 4)); // 7

//ejercicio 3 

 // Con funciones tradicionales
const numeros = [1, 2, 3, 4, 5];

const cuadrados = numeros.map(function(numero) {
  return numero * numero;
});
console.log("Cuadrados (tradicional):", cuadrados);

// Con funciones flecha
const cuadradosFlecha = numeros.map(numero => numero * numero);
console.log("Cuadrados (flecha):", cuadradosFlecha);

// Encadenamiento de operaciones
const resultado = numeros
  .filter(n => n > 2)   // se queda con [3, 4, 5]
  .map(n => n * 3)      // los multiplica → [9, 12, 15]
  .reduce((acc, n) => acc + n, 0); // suma todo → 36

console.log("Resultado final:", resultado);

//codigo 3.2

const frutas = ["manzana", "pera", "uva", "mango", "kiwi"];

const mayusculas = frutas.map(function(fruta) {
  return fruta.toUpperCase();
});
console.log("Mayúsculas (tradicional):", mayusculas);

const longitudes = frutas.map(fruta => fruta.length);
console.log("Longitudes (flecha):", longitudes);

const resultando = frutas
  .filter(f => f.length > 4)
  .map(f => f[0].toUpperCase())
  .reduce((acc, letra) => acc + letra, "");

console.log("Resultado final:", resultando);


// codigo 4 

 // Esto funciona - función tradicional hoisted
console.log(funcionTradicional()); // "¡Funciona!"

function funcionTradicional() {
  return "¡Funciona!";
}

// Esto NO funciona - función flecha no hoisted
// console.log(funcionFlecha()); // Error: Cannot access 'funcionFlecha' before initialization

const funcionFlecha = () => "¡También funciona!";
console.log(funcionFlecha()); // "¡También funciona!"

// codigo 4.2 

console.log(funcionTradicional()); 

function funcionTradicional() {
  return "¡Funciona la tradicional!";
}

const funcionFlechas = () => "¡Funciona la flecha!";
console.log(funcionFlecha());  


//codigo 5 
 const objeto = {
 nombre: "Mi Objeto",
 metodoTradicional: function() {
 console.log("this.nombre:", this.nombre);
 }
 };
 objeto.metodoTradicional(); // "this.nombre: Mi Objeto"
 // Pero si extraemos la función...
 const funcionExtraida = objeto.metodoTradicional;
 funcionExtraida(); // "this.nombre: undefined" (en modo estricto)

 //codigo 5.0
 const persona = {
  nombre: "Valentina",
  mostrarNombre: function() {
    console.log("Nombre dentro del objeto:", this.nombre);
  }
};

persona.mostrarNombre(); // "Nombre dentro del objeto: Valentina"

// Extraemos la función
const funcionSeparada = persona.mostrarNombre;
funcionSeparada(); // "Nombre dentro del objeto: undefined" 
