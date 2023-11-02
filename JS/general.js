// Procede el usuario a ingresar los valores para a, b y c
const a = parseFloat(prompt("Ingrese el valor de a:"));
const b = parseFloat(prompt("Ingrese el valor de b:"));
const c = parseFloat(prompt("Ingrese el valor de c:"));

// Calcular el discriminante (b^2 - 4ac)
const discriminante = b * b - 4 * a * c;

// Declarar un arreglo para almacenar las raíces
const raices = [];

if (discriminante > 0) {
    // Dos raíces reales distintas
    const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    raices.push(x1.toFixed(2), x2.toFixed(2)); // Redondear a 2 dígitos decimales
} else if (discriminante === 0) {
    // Una raíz real (raíz doble)
    const x = -b / (2 * a);
    raices.push(x.toFixed(2)); // Redondear a 2 dígitos decimales
} else {
    // No hay raíces reales (raíces complejas)
    const parteReal = -b / (2 * a);
    const parteImaginaria = Math.sqrt(Math.abs(discriminante)) / (2 * a);
    raices.push(`${parteReal.toFixed(2)} + ${parteImaginaria.toFixed(2)}i`, `${parteReal.toFixed(2)} - ${parteImaginaria.toFixed(2)}i`);
}

// Devolver el arreglo con las raíces redondeadas a 2 dígitos
return raices;
