/**
 * @fileoverview Archivo principal que orquesta la lógica de la aplicación.
 * @author Gemini
 */
import { initializeLoadingScreen } from "./dev/loading.js";
import { initializeBarHiding } from "./stable/monitor_bars.js";
import { initializeMonitor } from "./stable/monitor_axis.js";

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa el monitor de mouse y el tamaño del viewport
    initializeMonitor();

    // Inicializa la lógica para ocultar y mostrar las barras
    initializeBarHiding();

    // Muestra la pantalla una vez que el DOM esté listo
    initializeLoadingScreen();

/**
 * Versión de la aplicación.
 * @constant {string}
 */
const VERSION = '4.2.0';

document.addEventListener('DOMContentLoaded', () => {
    // Registra la versión de la aplicación en la consola.
    console.log(`Aplicación Mizulegends iniciada. Versión: ${VERSION}`);

});
