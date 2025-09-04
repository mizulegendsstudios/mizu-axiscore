/**.
 * @fileoverview Módulo para gestionar la creación, selección y arrastre de nodos.
 * @author Gemini
 */

/** @constant {string} ID del contenedor donde se crean los nodos. */
const NODE_CONTAINER_ID = 'black-content-wrapper';

let isDragging = false;
let activeNode = null;
let offset = { x: 0, y: 0 };
let selectedNode = null;

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
        console.log('Nuevo nodo creado.');
    });

    // Listeners para arrastrar y seleccionar nodos
    nodeContainer.addEventListener('mousedown', (event) => {
        const target = event.target;
        const nodeCard = target.closest('.node-card');
        const dragHandle = target.closest('.node-drag-handle');

        if (nodeCard) {
            if (selectedNode && selectedNode !== nodeCard) {
                selectedNode.classList.remove('selected');
            }
            nodeCard.classList.add('selected');
            selectedNode = nodeCard;
        } else if (selectedNode) {
            selectedNode.classList.remove('selected');
            selectedNode = null;
        }

        if (dragHandle) {
            isDragging = true;
            activeNode = dragHandle.closest('.node-card');
            const containerRect = nodeContainer.getBoundingClientRect();
            offset.x = event.clientX - activeNode.offsetLeft - containerRect.left;
            offset.y = event.clientY - activeNode.offsetTop - containerRect.top;
            activeNode.style.cursor = 'grabbing';
            event.stopPropagation();
        }
    });

    nodeContainer.addEventListener('mousemove', (event) => {
        if (!isDragging || !activeNode) return;
        const containerRect = nodeContainer.getBoundingClientRect();
        activeNode.style.left = `${event.clientX - containerRect.left - offset.x}px`;
        activeNode.style.top = `${event.clientY - containerRect.top - offset.y}px`;
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
        <div class="node-controls">
            <i class="fas fa-arrows-alt node-drag-handle"></i>
            <i class="fas fa-cog"></i>
        </div>
        <h3 class="font-bold text-base">Nodo</h3>
        <p class="text-xs mt-1">Arrastra para mover.</p>
    `;
    // Posiciona el nuevo nodo en el centro del contenedor
    const nodeContainer = document.getElementById(NODE_CONTAINER_ID);
    newNode.style.top = `${nodeContainer.clientHeight / 2 - newNode.clientHeight / 2}px`;
    newNode.style.left = `${nodeContainer.clientWidth / 2 - newNode.clientWidth / 2}px`;
    return newNode;
}
