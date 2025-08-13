let temperatura = 20; 
if (temperatura >= 20) 
    { console.log("Hace calor!"); } // Resultado: "Hace calor!"

let edad = 18;
 if (edad >= 18)
     { console.log("Eres mayor de edad"); } // Resultado: "Eres mayor de edad" 
 
 let dinero = 100;
 let precio = 50; 
 if (dinero >= precio) { console.log("Puedes comprar el producto"); } // Resultado: "Puedes comprar el producto"

 let password = "123456"; 
 if (password === "123456")
     { console.log("Acceso concedido"); } // Resultado: "Acceso concedido"

 let edad2 = 12;
  if (edad >= 14)
     { console.log("Puedes votar"); } 
  else { console.log("Aún no puedes votar"); } // Resultado: "Aún no puedes votar

  let numero = 7;
  if (numero % 2 === 0) 
    { console.log("Es par"); }
   else { console.log("Es impar"); } // Resultado: "Es impar"

   let calificacion = 65;
    if (calificacion >= 90)
         { console.log("Excelente - A"); } 
    else if (calificacion >= 80) 
        { console.log("Muy bueno - B"); } 
    else if (calificacion >= 70) 
        { console.log("Bueno - C"); } 
    else if (calificacion >= 60) 
        { console.log("Suficiente - D"); } 
    else { console.log("Insuficiente - F"); } // Resultado: "Muy bueno - B

    for (let i = 7; i <= 10; i++) 
    { console.log("Número: " + i); } // Resultado: // Número: 1 // Número: 2 // Número: 3 // Número: 4 // Número: 5


    for (let i = 1; i <= 10; i++)
         { console.log(`1000 x ${i} = ${1000 * i}`); } // Resultado: Tabla del 5

    let frutas2 = ["manzana", "banana", "naranja"]; 
    for (let i =  frutas2.length -1; i>=0; i--) 
        { console.log(frutas2[i]); } // Resultado: manzana, banana, naranja}

    // FOR...OF (para recorrer valores) 
    let colores = ["rojo", "verde", "azul"];
     for (let color of colores) { console.log(color); } 
     // FOR...IN (para recorrer propiedades)
      let persona = {nombre: "Juan", edad: 25, ciudad: "Madrid"}; 
      for (let propiedad in persona) { console.log(propiedad + ": " + persona[propiedad]); }   