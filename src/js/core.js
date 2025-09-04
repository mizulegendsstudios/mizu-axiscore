/**
 * @fileoverview Archivo principal que orquesta la lógica de la aplicación.
 * @author Gemini
 */
//STABLE
import { initializeLoadingScreen } from "./stable/loading.js";
import { initializeBarHiding } from "./stable/monitor_bars.js";
import { initializeMonitor } from "./stable/monitor_axis.js";
import { initializeZoomAndPan } from "./stable/zoom.js";
//DEV - En desarrollo


/**
 * Versión de la aplicación.
 * @constant {string}
 */
const VERSION = '4.20.12';

document.addEventListener('DOMContentLoaded', () => {
    // Registra la versión de la aplicación en la consola.
    console.log(`Aplicación Mizulegends iniciada. Versión: ${VERSION}`);

    // Inicializa todos los módulos.
    initializeMonitor();
    initializeBarHiding();
    initializeLoadingScreen();
    initializeZoomAndPan();
});
