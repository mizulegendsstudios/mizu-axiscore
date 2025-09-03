import { updateMonitor } from './stable/monitor_axis.js';
import { initializeBarHiding } from './deb/monitor_bars.js';

// Inicializa el monitor de mouse y viewport al cargar la página.
document.addEventListener('DOMContentLoaded', () => {
    // Se ejecuta al inicio para mostrar el tamaño inicial del viewport.
    updateMonitor({ clientX: 0, clientY: 0 });
    
    // Configura el listener para actualizar el monitor al mover el mouse.
    document.addEventListener('mousemove', updateMonitor);
    
    // Inicializa la funcionalidad de ocultar/mostrar las barras.
    initializeBarHiding();
});
