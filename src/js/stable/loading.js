/**
 * Module for managing page loading and preventing FOUC (Flash of Unstyled Content).
 * @module Loading
 */
export function initializeLoadingScreen() {
    const body = document.body;
    if (body) {
        body.style.opacity = '1';
    }
}
