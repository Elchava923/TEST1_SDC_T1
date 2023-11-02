// El usuario ingresa la base y la altura del rectangulo
const base = parseFloat(prompt("Ingrese la base del rectángulo:"));
const altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));

// Calcular el perímetro y superficie
const perimetro = 2 * (base + altura);
const superficie = base * altura;

// Arreglo para almacenar resultados
const resultados = [perimetro, superficie];

return resultados;

