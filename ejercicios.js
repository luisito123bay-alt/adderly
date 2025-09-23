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

// 12. Juego de adivinanza
function juegoAdivinanza() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intento;
    while (intento !== numeroSecreto) {
        intento = parseInt(prompt("Adivina un número del 1 al 10:"));
        if (intento < numeroSecreto) {
            alert("Muy bajo");
        } else if (intento > numeroSecreto) {
            alert("Muy alto");
        } else {
            alert("¡Correcto!");
        }
    }
}
// juegoAdivinanza(); // Descomenta para usar en navegador

// 13. Cuenta regresiva desde un número hasta 0
function cuentaRegresiva(desde) {
    for (let i = desde; i >= 0; i--) {
        console.log(i);
    }
}
console.log("13. Cuenta regresiva desde 5:");
cuentaRegresiva(5);

// 14. Validar que el número ingresado sea mayor a 0
function solicitarNumeroValido() {
    let numero;
    do {
        numero = parseInt(prompt("Ingresa un número mayor a 0:"));
    } while (numero <= 0 || isNaN(numero));
    alert("Número válido ingresado: " + numero);
}
// solicitarNumeroValido(); // Descomenta para usar en navegador

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
        if (suma > 500) {
            console.log("Suma superó 500 en:", i, "Suma:", suma);
            break;
        }
    }
}
console.log("16. Sumar impares hasta que la suma supere 500:");
sumarImparesHasta500();

// 17. Contador de intentos de login
function loginIntentos() {
    const usuarioCorrecto = "admin";
    const claveCorrecta = "1234";
    let intentos = 0;
    while (intentos < 3) {
        const usuario = prompt("Usuario:");
        const clave = prompt("Contraseña:");
        if (usuario === usuarioCorrecto && clave === claveCorrecta) {
            alert("¡Login exitoso!");
            return;
        } else {
            alert("Datos incorrectos.");
            intentos++;
        }
    }
    alert("Has excedido los intentos.");
}
// loginIntentos(); // Descomenta para usar en navegador

// 18. Sumar hasta que el usuario ingrese 0
function sumarHastaCero() {
    let suma = 0;
    let numero;
    do {
        numero = parseInt(prompt("Ingresa un número (0 para terminar):"));
        suma += numero;
    } while (numero !== 0);
    alert("Suma total: " + suma);
}
// sumarHastaCero(); // Descomenta para usar en navegador

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
