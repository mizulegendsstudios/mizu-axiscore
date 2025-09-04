import { initializeLoadingScreen } from "./dev/loading.js";
import { initializeBarHiding } from "./stable/monitor_bars.js";
import { updateMonitor } from "./stable/monitor_axis.js";

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa el monitor de mouse y el tamaño del viewport
    updateMonitor();

    // Inicializa la lógica para ocultar y mostrar las barras
    initializeBarHiding();

    // Muestra la pantalla una vez que el DOM esté listo
    initializeLoadingScreen();
});
