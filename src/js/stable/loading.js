/**
 * Bloquea el FUOC y muestra la página cuando todo está listo.
 * Se llama una sola vez al arrancar la aplicación.
 */
export function initializeLoadingScreen() {
  // 1. Ocultamos el documento antes de que cargue CSS
  document.documentElement.style.visibility = 'hidden';

  // 2. Cuando el DOM + CSS estén listos, mostramos
  //    (usamos 'DOMContentLoaded' para no esperar imágenes)
  window.addEventListener('DOMContentLoaded', () => {
    // Un micro-tick para que el motor aplique estilos
    requestAnimationFrame(() => {
      document.documentElement.style.visibility = 'visible';
    });
  });
}
