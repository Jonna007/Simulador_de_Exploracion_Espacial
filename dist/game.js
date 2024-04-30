"use strict";
// game.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomEvent = void 0;
// Importa las clases o interfaces necesarias
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
        const randomEvent = generateRandomEvent();
        (0, eventManagement_1.simulateRandomEvent)(randomEvent, spaceship);
        // Salir del bucle principal si la salud de la nave llega a cero
        if (spaceship.health <= 0) {
            console.log("La nave ha sido destruida. Fin del juego.");
            break;
        }
    }
}
// Función para generar un evento aleatorio
function generateRandomEvent() {
    // Lista de posibles eventos
    const possibleEvents = [
        {
            affectHealth: (spaceship) => {
                // Reducir la salud de la nave
                spaceship.health -= Math.floor(Math.random() * 20) + 10; // Reducir entre 10 y 30 de salud
            },
            affectCargoCapacity: (spaceship) => {
                // No afectar la capacidad de carga en este evento
            },
            affectSpeed: (spaceship) => {
                // No afectar la velocidad en este evento
            }
        },
        {
            affectHealth: (spaceship) => {
                // No afectar la salud en este evento
            },
            affectCargoCapacity: (spaceship) => {
                // Incrementar la capacidad de carga de la nave
                spaceship.cargoCapacity += Math.floor(Math.random() * 10) + 5; // Incrementar entre 5 y 15 la capacidad de carga
            },
            affectSpeed: (spaceship) => {
                // No afectar la velocidad en este evento
            }
        },
    ];
    // Selecciona un evento aleatorio de la lista de posibles eventos
    const randomIndex = Math.floor(Math.random() * possibleEvents.length);
    return possibleEvents[randomIndex];
}
exports.generateRandomEvent = generateRandomEvent;
// Iniciar el juego
startGame();
