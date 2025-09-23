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
// 11. Generar una secuencia de Fibonacci de los primeros 10 números
function generarFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}
console.log("11. Primeros 10 números de Fibonacci:", generarFibonacci(10));


// 12. Simulación de juego de adivinanza
    const numeroSecreto = 7; 
    const intentos = [3, 5, 7]; 

    for (let i = 0; i < intentos.length; i++) {
        const intento = intentos[i];
        console.log(`Intento ${i + 1}: ${intento}`);
        if (intento < numeroSecreto) {
            console.log("Muy bajo");
        } else if (intento > numeroSecreto) {
            console.log("Muy alto");
        } else {
            console.log("¡Correcto!");
            break;
        }
    }
}
console.log("12. Juego de adivinanza simulado:");
juegoAdivinanzaSimulado();


// 13. Cuenta regresiva desde un número hasta 0
function cuentaRegresiva(desde) {
    for (let i = desde; i >= 0; i--) {
        console.log(i);
    }
}
console.log("13. Cuenta regresiva desde 5:");
cuentaRegresiva(5);


// 14. Validar número mayor a 0 (simulado)
function validarNumeroMayorACero(numero) {
    if (numero > 0) {
        console.log("Número válido:", numero);
    } else {
        console.log("Número inválido. Debe ser mayor a 0.");
    }
}
console.log("14. Validación de número:");
validarNumeroMayorACero(4); 


// 15. Mostrar números del 1 al 5 usando do...while
function mostrarDel1Al5() {
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= 5);
}
console.log("15. Números del 1 al 5:");
mostrarDel1Al5();


// 16. Sumar solo números impares entre 1 y 50 hasta que la suma supere 500
function sumarImparesHasta500() {
    let suma = 0;
    for (let i = 1; i <= 50; i += 2) {
        suma += i;
        console.log(`Suma parcial: ${suma}`);
        if (suma > 500) {
            console.log("Suma superó 500 en:", i);
            break;
        }
    }
}
console.log("16. Sumar impares hasta que la suma supere 500:");
sumarImparesHasta500();


// 17. Contador de intentos de login (simulado)
function loginIntentosSimulado() {
    const usuarioCorrecto = "admin";
    const claveCorrecta = "1234";
    const intentos = [
        { usuario: "admin", clave: "0000" },
        { usuario: "user", clave: "1234" },
        { usuario: "admin", clave: "1234" }
    ];

    for (let i = 0; i < 3; i++) {
        let intento = intentos[i];
        console.log(`Intento ${i + 1}:`, intento);
        if (intento.usuario === usuarioCorrecto && intento.clave === claveCorrecta) {
            console.log("¡Login exitoso!");
            return;
        } else {
            console.log("Datos incorrectos.");
        }
    }
    console.log("Has excedido los 3 intentos.");
}
console.log("17. Simulación de login:");
loginIntentosSimulado();


// 18. Sumar hasta que el usuario ingrese 0 (simulado)
function sumarHastaCeroSimulado(entradas) {
    let suma = 0;
    for (let i = 0; i < entradas.length; i++) {
        let numero = entradas[i];
        if (numero === 0) break;
        suma += numero;
    }
    console.log("Suma total:", suma);
}
console.log("18. Sumar hasta que se ingrese 0:");
sumarHastaCeroSimulado([5, 10, 15, 0, 20]); 

// 19. Imprimir la serie de Fibonacci hasta que un número supere 100
function fibonacciHasta100() {
    let fib = [0, 1];
    while (true) {
        let next = fib[fib.length - 1] + fib[fib.length - 2];
        if (next > 100) break;
        fib.push(next);
    }
    console.log("19. Fibonacci hasta que supere 100:", fib);
}
fibonacciHasta100();


// 20. Imprimir múltiplos de 3 menores a 50
function multiplosDe3() {
    let resultado = [];
    for (let i = 3; i < 50; i += 3) {
        resultado.push(i);
    }
    console.log("20. Múltiplos de 3 hasta 50:", resultado);
}
multiplosDe3();
