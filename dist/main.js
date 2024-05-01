"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const navigation_1 = require("./navigation");
const resourceManagement_1 = require("./resourceManagement");
const eventManagement_1 = require("./eventManagement");
// Función principal del juego
function startGame() {
    // Crear una instancia de la nave espacial
    const spaceship = {
        health: 100,
        cargoCapacity: 50,
        speed: 10
    };
    // Bucle principal del juego
    while (true) {
        // Simular la exploración
        (0, navigation_1.explore)("north");
        // Simular la recolección de recursos de un planeta aleatorio
        const randomResourceType = Math.floor(Math.random() * 3);
        (0, resourceManagement_1.collectResources)(randomResourceType, spaceship);
        // Simular un evento aleatorio
        (0, eventManagement_1.simulateRandomEvent)(generateRandomEvent(), spaceship);
        // Salir del bucle principal si la salud de la nave llega a cero
        if (spaceship.health <= 0) {
            console.log("La nave ha sido destruida. Fin del juego.");
            break;
        }
    }
}
// Iniciar el juego
startGame();
function generateRandomEvent() {
    return {
        affectHealth: (spaceship) => {
            // Implementa el efecto del evento en la salud de la nave
        },
        affectCargoCapacity: (spaceship) => {
            // Implementa el efecto del evento en la capacidad de carga de la nave
        },
        affectSpeed: (spaceship) => {
            // Implementa el efecto del evento en la velocidad de la nave
        }
    };
}
