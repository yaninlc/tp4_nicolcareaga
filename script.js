// Funciones de la página principal (PAGINA1)
function saludar() {
    const nombre = document.getElementById('nombre').value;
    if (nombre) {
        document.getElementById('mensajeBienvenida').innerHTML = `¡Bienvenido, ${nombre}!`;
    } else {
        alert('Por favor, ingresa tu nombre.');
    }
}

// Funciones de la página de galería (PAGINA2)
function verificarEdad() {
    const edad = parseInt(document.getElementById('edad').value);
    let mensaje = '';
    
    if (edad > 20) {
        mensaje = 'Eres mayor de 20 años';
    } else if (edad === 20) {
        mensaje = 'Tienes exactamente 20 años';
    } else {
        mensaje = 'Eres menor de 20 años';
    }

    document.getElementById('mensajeEdad').innerHTML = mensaje;
}

function cambiarImagen(img, src) {
    img.src = src;
}

function restaurarImagen(img, src) {
    img.src = src;
}
// Función para realizar las operaciones matemáticas
function realizarOperacion(operacion) {
    let resultado = 0;
    let num1, num2, num3;

    switch (operacion) {
        case 'multiplicacion':
            // Obtener los valores de los campos de entrada
            num1 = parseFloat(document.getElementById('num1').value);
            num2 = parseFloat(document.getElementById('num2').value);
            if (isNaN(num1) || isNaN(num2)) {
                alert('Por favor ingresa dos números válidos para la multiplicación.');
                return;
            }
            resultado = num1 * num2;
            break;

        case 'exponente':
            // Obtener el valor del campo de entrada
            num3 = parseFloat(document.getElementById('num3').value);
            if (isNaN(num3)) {
                alert('Por favor ingresa un número válido para elevar al cuadrado.');
                return;
            }
            resultado = Math.pow(num3, 2); // Elevar al cuadrado
            break;

        case 'resta':
            // Obtener los valores de los campos de entrada
            num1 = parseFloat(document.getElementById('num4').value);
            num2 = parseFloat(document.getElementById('num5').value);
            if (isNaN(num1) || isNaN(num2)) {
                alert('Por favor ingresa dos números válidos para la resta.');
                return;
            }
            resultado = num1 - num2;
            break;
    }

    // Mostrar el resultado en la página
    document.getElementById('scriptMessage').innerHTML = `El resultado de la operación es: ${resultado}`;
}

// Función para mostrar mensaje de script en la página de la tabla (PAGINA3)
function mostrarScript(operacion) {
    document.getElementById('scriptMessage').innerHTML = `Script para realizar la operación ${operacion}.`;
}
