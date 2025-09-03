/**
 * @fileoverview Módulo para controlar la visibilidad de las barras roja y azul.
 * @author Gemini
 */

let hideTimer;
let isHidden = false;
const HIDE_DELAY = 5000; // 5 segundos
const EDGE_THRESHOLD = 50; // La distancia del borde para activar la visibilidad.

/**
 * Oculta las barras roja y azul, y expande la div negra.
 */
function hideBars() {
    const redBar = document.getElementById('red-bar');
    const blueBar = document.getElementById('blue-bar');
    const blackDiv = document.getElementById('black-div');

    if (redBar) {
        redBar.classList.add('opacity-0', '-translate-y-full');
    }
    if (blueBar) {
        blueBar.classList.add('opacity-0', '-translate-x-full');
    }
    if (blackDiv) {
        // Expande la div negra para cubrir todo el viewport
        blackDiv.classList.remove('top-20', 'left-20', 'right-0', 'bottom-0');
        blackDiv.classList.add('inset-0');
    }
    isHidden = true;
}

/**
 * Muestra las barras roja y azul, y contrae la div negra.
 */
function showBars() {
    const redBar = document.getElementById('red-bar');
    const blueBar = document.getElementById('blue-bar');
    const blackBar = document.getElementById('black-bar');

    if (redBar) {
        redBar.classList.remove('opacity-0', '-translate-y-full');
    }
    if (blueBar) {
        blueBar.classList.remove('opacity-0', '-translate-x-full');
    }
    if (blackBar) {
        // Restaura el tamaño original de la div negra
        blackBar.classList.remove('inset-0');
        blackBar.classList.add('top-20', 'left-20', 'right-0', 'bottom-0');
    }
    isHidden = false;
}

/**
 * Inicia el temporizador para ocultar las barras.
 */
function startHideTimer() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hideBars, HIDE_DELAY);
}

/**
 * Inicializa la funcionalidad de las barras al cargar la página.
 */
export function initializeBarHiding() {
    startHideTimer();

    document.getElementById('body-container').addEventListener('mousemove', (event) => {
        // Limpia el temporizador cada vez que el mouse se mueve.
        clearTimeout(hideTimer);

        // Si las barras están ocultas y el mouse está cerca de los bordes, muéstralas.
        if (isHidden) {
            if (event.clientX < EDGE_THRESHOLD || event.clientY < EDGE_THRESHOLD) {
                showBars();
            }
        }
        
        // Reinicia el temporizador para ocultar las barras si el mouse no está cerca de los bordes.
        if (event.clientX >= EDGE_THRESHOLD && event.clientY >= EDGE_THRESHOLD) {
            startHideTimer();
        }
    });
}
