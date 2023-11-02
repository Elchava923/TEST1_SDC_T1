//Inicio
//|
//|__ Leer el costo básico del artículo (Costo_Básico)
//|
//_ Si Costo_Básico <= $20:
//  |
//  |__ Impuesto = $0
//
//_ Si Costo_Básico > $20 y Costo_Básico <= $500:
//   |
//  |__ Impuesto = 30% de (Costo_Básico - $20)
//
//_ Si Costo_Básico > $500:
//  |
//   |__ Impuesto = 50% de (Costo_Básico - $500) + 30% de ($500 - $20)
//|
//|__ Precio_Total = Costo_Básico + Impuesto
//|
//|__ Mostrar Precio_Total
//|
//Fin




// Leer la categoría del trabajador y el sueldo
const categoria = parseInt(prompt("Ingrese la categoría del trabajador (1, 2, 3, 4):"));
const sueldo = parseFloat(prompt("Ingrese el sueldo del trabajador:"));

let aumento = 0;
let nuevoSueldo = 0;

// Calcular el aumento según la categoría
if (categoria === 1) {
    aumento = 0.15 * sueldo;
} else if (categoria === 2) {
    aumento = 0.10 * sueldo;
} else if (categoria === 3) {
    aumento = 0.08 * sueldo;
} else if (categoria === 4) {
    aumento = 0.07 * sueldo;
}

// Calcular el nuevo sueldo y redondearlo a 2 cifras decimales
nuevoSueldo = Math.round((sueldo + aumento) * 100) / 100;

// Almacenar los resultados en un arreglo
const resultados = [categoria, nuevoSueldo];

// Devolver el arreglo con los resultados redondeados
return resultados;

  

  

