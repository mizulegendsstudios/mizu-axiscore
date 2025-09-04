/**
 * Module for managing page loading and preventing FOUC (Flash of Unstyled Content).
 * @module Loading
 */
export function initializeLoadingScreen() {
  document.addEventListener('DOMContentLoaded', (event) => {
    document.body.style.opacity = '1';
  });
}
