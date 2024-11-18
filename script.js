// Función para sumar
function sumar() {
    const num1 = parseFloat(document.getElementById('num1').value); // Obtener valor del primer input
    const num2 = parseFloat(document.getElementById('num2').value); // Obtener valor del segundo input
    const resultado = num1 + num2; // Realizar la suma
    document.getElementById('result').value = resultado; // Mostrar el resultado en el input de resultado
}

// Función para restar
function restar() {
    const num1 = parseFloat(document.getElementById('num1').value); 
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 - num2; 
    document.getElementById('result').value = resultado; 
}

// Función para multiplicar
function multiplicar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 * num2;
    document.getElementById('result').value = resultado; 
}


// Función para dividir
function dividir() {
    const num1 = parseFloat(document.getElementById('num1').value); 
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 / num2; 
    document.getElementById('result').value = resultado; 
}

// Función para Limpiar
function clear() {
    const num1 = '';
    const num2  = ''; 
    const resultado =''; 
    document.getElementById('result').value = resultado; // ponemos a 0 todos los input
    document.getElementById('num1').value = num1;      // ponemos a 0 todos los input
    document.getElementById('num2').value = num2;       // ponemos a 0 todos los input

}



// Conectar el botón con su respectiva funcion
document.getElementById('sum').addEventListener('click', sumar);
document.getElementById('rest').addEventListener('click', restar);
document.getElementById('mult').addEventListener('click', multiplicar);
document.getElementById('divi').addEventListener('click', dividir);
document.getElementById('ce').addEventListener('click', clear);