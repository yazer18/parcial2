// 1️⃣ Suma de tres valores constantes
function sumarConstantes() {
    const a = 10, b = 20, c = 14;
    const suma = a + b + c;
    document.getElementById("resultadoSuma").textContent = `La suma de los valores constantes es: ${suma}`;
}

// 2️⃣ Cuadrado de un número
function calcularCuadrado() {
    const numero = parseFloat(document.getElementById("numeroCuadrado").value);
    const cuadrado = numero ** 2;
    document.getElementById("resultadoCuadrado").textContent = `El cuadrado de ${numero} es: ${cuadrado}`;
}

// 3️⃣ Promedio de calificaciones
function calcularPromedio() {
    const nombre = document.getElementById("nombreEstudiante").value;
    const n1 = parseFloat(document.getElementById("nota1").value);
    const n2 = parseFloat(document.getElementById("nota2").value);
    const n3 = parseFloat(document.getElementById("nota3").value);
    const promedio = ((n1 + n2 + n3) / 3).toFixed(2);
    document.getElementById("resultadoPromedio").textContent = `El promedio de ${nombre} es: ${promedio} puntos.`;
}

// 4️⃣ Conversión de metros
function convertirMetros() {
    const metros = parseFloat(document.getElementById("metros").value);
    const centimetros = metros * 100;
    const kilometros = metros / 1000;
    document.getElementById("resultadoConversion").textContent = `${metros} metros equivalen a ${centimetros} centímetros y ${kilometros} kilómetros.`;
}

// 5️⃣ Comparación de dos valores
function compararValores() {
    const v1 = parseFloat(document.getElementById("valor1").value);
    const v2 = parseFloat(document.getElementById("valor2").value);

    if (v1 === v2) {
        document.getElementById("resultadoComparacion").textContent = "Los valores no deben ser iguales. Intente de nuevo.";
        return;
    }

    const mayor = Math.max(v1, v2);
    const menor = Math.min(v1, v2);
    const diferencia = Math.abs(v1 - v2);

    document.getElementById("resultadoComparacion").textContent = `El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferencia}.`;
}
