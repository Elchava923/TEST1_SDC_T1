//Inicio
//|
//|__ Leer la categoría del trabajador (Categoria)
//|__ Leer el sueldo del trabajador (Sueldo)
//|
//|__ Si Categoria es igual a 1:
//|   |
//|   |__ Aumento = 0.15 * Sueldo
//|__ NuevoSueldo = Sueldo + Aumento
//|   |__ Mostrar "Categoría 1 - Nuevo sueldo: " + NuevoSueldo
//|
//|__ Si Categoria es igual a 2:
//|   |ß
//|   |__ Aumento = 0.10 * Sueldo
//|   |__ NuevoSueldo = Sueldo + Aumento
//|   |__ Mostrar "Categoría 2 - Nuevo sueldo: " + NuevoSueldo
//|
//|__ Si Categoria es igual a 3:
//|   |
//|   |__ Aumento = 0.08 * Sueldo
//|   |__ NuevoSueldo = Sueldo + Aumento
//|   |__ Mostrar "Categoría 3 - Nuevo sueldo: " + NuevoSueldo
//|
//|__ Si Categoria es igual a 4:
//|   |
//|   |__ Aumento = 0.07 * Sueldo
//|   |__ NuevoSueldo = Sueldo + Aumento
//|   |__ Mostrar "Categoría 4 - Nuevo sueldo: " + NuevoSueldo
//|
//|__ Si Categoria no es igual a 1, 2, 3 ni 4:
//|   |
//|   |__ Mostrar "Categoría no válida"
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

// Calculo el nuevo sueldo
nuevoSueldo = sueldo + aumento;

// Redondear el nuevo sueldo a 2 dígitos decimales
nuevoSueldo = nuevoSueldo.toFixed(2);

// Almacenar los resultados 
const resultados = [categoria, parseFloat(nuevoSueldo)]; // Convertir nuevoSueldo a número

// Devolver el arreglo con los resultados
return resultados;



