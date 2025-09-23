// suma de elementos array 
function sumarElementos(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}
const numeros = [10, 20, 30, 40];
console.log("Suma total:", sumarElementos(numeros));
// Numero mayor y menor
function numeroMayorYMenor(arr) {
    let mayor = arr[0];
    let menor = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) mayor = arr[i];
        if (arr[i] < menor) menor = arr[i];
    }
    return { mayor, menor };
}
const numeros2 = [10, 20, 30, 40];
const resultado = numeroMayorYMenor(numeros2);
console.log(`Mayor: ${resultado.mayor}, Menor: ${resultado.menor}`);

// controlar elementos pares
function contarPares(arr) {
    let contador = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) contador++;
    }
    return contador;
}
const numeros3 = [10, 21, 32, 43, 54];
console.log("Cantidad de números pares:", contarPares(numeros3));

// ordenar unarray
function ordenarArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
const numeros4 = [40, 10, 30, 20];
console.log("Array ordenado:", ordenarArray(numeros4));

// buscar un elemento
function buscarElemento(arr, elemento) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elemento) return i;
    }
    return -1;
}
const numeros5 = [10, 20, 30, 40];
const elementoBuscado5 = 30;
console.log(`El elemento ${elementoBuscado5} está en el índice:`, buscarElemento(numeros5, elementoBuscado5));

// revertir un array
function invertirArray(arr) {
    let invertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        invertido.push(arr[i]);
    }
    return invertido;
}
const numeros6 = [10, 20, 30, 40];
console.log("Array invertido:", invertirArray(numeros6));

// convertir nombres a mayuscula
function convertirMayusculas(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i].toUpperCase());
    }
    return resultado;
}
const nombres = ["ana", "lia", "nilda"];
console.log("Nombres en mayúsculas:", convertirMayusculas(nombres));


// sumar solo los numero positivos
function sumarPositivos(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) suma += arr[i];
    }
    return suma;
}
const numeros8 = [10, -20, 30, -40, 50];
console.log("Suma de positivos:", sumarPositivos(numeros8));

// obtener el primer multiplo de 5 
function primerMultiploDe5(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 5 === 0) return arr[i];
    }
    return null;
}
const numeros9 = [1, 2, 3, 10, 20];
console.log("Primer múltiplo de 5:", primerMultiploDe5(numeros9));

// tabla de multiplicar
function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
console.log("Tabla del 5:");
tablaMultiplicar(5);
//Calcular el promedio de un array
function promedioArray(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma / arr.length;
}
const numeros11 = [10, 20, 30, 40];
console.log("Promedio:", promedioArray(numeros11));
//Contar elementos
function contarMayoresA(arr, limite) {
    let contador = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > limite) contador++;
    }
    return contador;
}
const numeros12 = [5, 15, 25, 35];
const limite12 = 20;
console.log(`Cantidad de números mayores a ${limite12}:`, contarMayoresA(numeros12, limite12));
//Duplicar todos los elementos
function duplicarArray(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i] * 2);
    }
    return resultado;
}
const numeros13 = [1, 2, 3, 4];
console.log("Array duplicado:", duplicarArray(numeros13));
//elementos negativos
function filtrarNegativos(arr) {
    let negativos = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) negativos.push(arr[i]);
    }
    return negativos;
}
const numeros14 = [-5, 10, -15, 20];
console.log("Números negativos:", filtrarNegativos(numeros14));
//convertir todos los numeros a string
function convertirAStrings(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i].toString());
    }
    return resultado;
}
const numeros15 = [100, 200, 300];
console.log("Números como strings:", convertirAStrings(numeros15));
//elementos positivos
function todosPositivos(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) return false;
    }
    return true;
}
const numeros16 = [1, 2, 3, -4];
console.log("¿Todos positivos?", todosPositivos(numeros16));
//numero mas sercano a 0 
function masCercanoACero(arr) {
    let cercano = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i]) < Math.abs(cercano)) {
            cercano = arr[i];
        }
    }
    return cercano;
}
const numeros17 = [10, -3, 5, -1];
console.log("Número más cercano a cero:", masCercanoACero(numeros17));
//contar cuantos 0 hay
function contarCeros(arr) {
    let contador = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) contador++;
    }
    return contador;
}
const numeros18 = [0, 1, 0, 2, 0, 3];
console.log("Cantidad de ceros:", contarCeros(numeros18));
//elevar todos los elementos al cuadrado
function elevarAlCuadrado(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i] ** 2); 
    }
    return resultado;
}
const numeros19 = [2, 3, 4];
console.log("Elementos al cuadrado:", elevarAlCuadrado(numeros19));
//imprimir los multiplos de 3 hasta 50 
function generarNumeros(n) {
    let resultado = [];
    for (let i = 1; i <= n; i++) {
        resultado.push(i);
    }
    return resultado;
}
const numero20 = 10;
console.log(`Números del 1 al ${numero20}:`, generarNumeros(numero20));
