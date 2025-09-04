/**
 * @fileoverview Módulo para gestionar la creación, selección y arrastre de nodos.
 * @author Gemini
 */

/** @constant {string} ID del contenedor donde se crean los nodos. */
const NODE_CONTAINER_ID = 'black-content-wrapper';

let isDragging = false;
let activeNode = null;
let offset = { x: 0, y: 0 };

/**
 * Inicializa la funcionalidad para crear y arrastrar nodos.
 */
export function initializeNodeManager() {
    const createNodeBtn = document.getElementById('create-node-btn');
    const nodeContainer = document.getElementById(NODE_CONTAINER_ID);

    if (!createNodeBtn || !nodeContainer) {
        console.error('Botón de creación o contenedor de nodos no encontrado.');
        return;
    }

    // Listener para el botón de crear nodo
    createNodeBtn.addEventListener('click', () => {
        const newNode = createNode();
        nodeContainer.appendChild(newNode);
        // Log de confirmación en el DOM
        const log = document.createElement('p');
        log.textContent = 'Nuevo nodo creado.';
        nodeContainer.appendChild(log);
        console.log('Nuevo nodo creado.');
    });

    // Listeners para arrastrar nodos
    nodeContainer.addEventListener('mousedown', (event) => {
        const target = event.target.closest('.node-card');
        if (target) {
            isDragging = true;
            activeNode = target;
            offset.x = event.clientX - activeNode.offsetLeft;
            offset.y = event.clientY - activeNode.offsetTop;
            activeNode.style.cursor = 'grabbing';
            event.stopPropagation(); // Evita que el evento se propague al contenedor de zoom/pan
        }
    });

    nodeContainer.addEventListener('mousemove', (event) => {
        if (!isDragging || !activeNode) return;
        activeNode.style.left = `${event.clientX - offset.x}px`;
        activeNode.style.top = `${event.clientY - offset.y}px`;
    });

    nodeContainer.addEventListener('mouseup', () => {
        isDragging = false;
        if (activeNode) {
            activeNode.style.cursor = 'grab';
            activeNode = null;
        }
    });

    console.log('Módulo de gestión de nodos inicializado.');
}

/**
 * Crea un nuevo elemento de nodo (div).
 * @returns {HTMLElement} El nuevo elemento del nodo.
 */
function createNode() {
    const newNode = document.createElement('div');
    newNode.className = 'node-card absolute p-4 rounded-lg shadow-lg';
    newNode.innerHTML = `
        <h3 class="font-bold text-base">Nodo</h3>
        <p class="text-xs mt-1">Arrastra para mover.</p>
    `;
    // Posiciona el nuevo nodo en el centro del contenedor
    const nodeContainer = document.getElementById(NODE_CONTAINER_ID);
    newNode.style.top = `${nodeContainer.clientHeight / 2 - newNode.clientHeight / 2}px`;
    newNode.style.left = `${nodeContainer.clientWidth / 2 - newNode.clientWidth / 2}px`;
    return newNode;
}
