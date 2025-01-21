
console.log("¡La página ha sido cargada exitosamente!");

function actualizarContenido() {
    document.getElementById('geolocalizacion').innerHTML = 'Ubicación actual: Madrid, España';
}

setTimeout(actualizarContenido, 2000);