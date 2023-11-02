// Solicitar al usuario ingresar el nombre del dinosaurio, peso en toneladas y longitud en libras
const nombreDinosaurio = prompt("Ingrese el nombre del dinosaurio:");
const pesoEnToneladas = parseFloat(prompt("Ingrese el peso del dinosaurio en toneladas:"));
const longitudEnLibras = parseFloat(prompt("Ingrese la longitud del dinosaurio en libras:"));

// Realizar las conversiones
const pesoEnKilogramos = pesoEnToneladas * 1000;
const longitudEnMetros = longitudEnLibras * 0.453592;

// Almacenar resultados en un arreglo
const resultados = [nombreDinosaurio, pesoEnKilogramos, longitudEnMetros];

// Devolver el arreglo con los valores convertidos
return resultados;


  