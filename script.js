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

// Función para mostrar mensaje de script en la página de la tabla (PAGINA3)
function mostrarScript(operacion) {
    document.getElementById('scriptMessage').innerHTML = `Script para realizar la operación ${operacion}.`;
}
