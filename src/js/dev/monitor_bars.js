/**
 * @fileoverview Módulo para controlar la visibilidad de las barras roja y azul.
 * @author Gemini
 */

let hideTimer;
const HIDE_DELAY = 5000; // 5 segundos

/**
 * Oculta las barras roja y azul.
 */
function hideBars() {
    const redBar = document.getElementById('red-bar');
    const blueBar = document.getElementById('blue-bar');

    if (redBar) {
        redBar.classList.add('opacity-0', '-translate-y-full');
    }
    if (blueBar) {
        blueBar.classList.add('opacity-0', '-translate-x-full');
    }
}

/**
 * Muestra las barras roja y azul.
 */
function showBars() {
    const redBar = document.getElementById('red-bar');
    const blueBar = document.getElementById('blue-bar');

    // Limpia el temporizador para evitar que se oculten si el mouse está encima
    clearTimeout(hideTimer);

    if (redBar) {
        redBar.classList.remove('opacity-0', '-translate-y-full');
    }
    if (blueBar) {
        blueBar.classList.remove('opacity-0', '-translate-x-full');
    }
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
    const redBar = document.getElementById('red-bar');
    const blueBar = document.getElementById('blue-bar');

    if (redBar) {
        redBar.addEventListener('mouseenter', showBars);
        redBar.addEventListener('mouseleave', startHideTimer);
    }

    if (blueBar) {
        blueBar.addEventListener('mouseenter', showBars);
        blueBar.addEventListener('mouseleave', startHideTimer);
    }

    // Oculta las barras inicialmente después del tiempo de retardo
    startHideTimer();
}
