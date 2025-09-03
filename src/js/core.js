import { updateMonitor } from './stable/monitor_axis.js';

/**
 * Función de inicialización para configurar los listeners de eventos.
 */
function initialize() {
    // Llamamos a la función para mostrar los valores iniciales al cargar la página
    updateMonitor();

    // Escuchamos los eventos de movimiento del mouse y redimensionamiento de la ventana
    document.addEventListener('mousemove', updateMonitor);
    window.addEventListener('resize', updateMonitor);
}

// Inicializamos la aplicación una vez que el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', initialize);
