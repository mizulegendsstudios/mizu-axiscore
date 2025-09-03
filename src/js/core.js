import { updateMonitor } from './stable/monitor_axis.js';
import { initializeBarHiding } from './dev/monitor_bars.js';

/**
 * Función de inicialización para configurar los listeners de eventos.
 */
function initialize() {
    // Llamamos a la función para mostrar los valores iniciales al cargar la página
    updateMonitor();

    // Escuchamos los eventos de movimiento del mouse y redimensionamiento de la ventana
    document.addEventListener('mousemove', updateMonitor);
    window.addEventListener('resize', updateMonitor);
    // Inicializa la funcionalidad de ocultar/mostrar las barras.
    initializeBarHiding();
}
