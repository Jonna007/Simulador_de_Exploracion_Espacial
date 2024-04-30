// game.ts

// Importa las clases o interfaces necesarias
import { explore } from "./navigation";
import { collectResources } from "./resourceManagement";
import { simulateRandomEvent } from "./eventManagement";
import { Spaceship } from "./spaceship";
import { Planet, ResourceType } from "./planet";
import { Event } from './event'; 

// Función principal del juego
function startGame(): void {
    // Crear una instancia de la nave espacial
    const spaceship: Spaceship = {
        health: 100,
        cargoCapacity: 50,
        speed: 10
    };

    // Bucle principal del juego
    while (true) {
        // Simular la exploración
        explore("north");

        // Simular la recolección de recursos de un planeta aleatorio
        const randomResourceType: ResourceType = Math.floor(Math.random() * 3);
        collectResources(randomResourceType, spaceship);

        // Simular un evento aleatorio
        const randomEvent: Event = generateRandomEvent(); 
        simulateRandomEvent(randomEvent, spaceship);

        // Salir del bucle principal si la salud de la nave llega a cero
        if (spaceship.health <= 0) {
            console.log("La nave ha sido destruida. Fin del juego.");
            break;
        }
    }
}

// Función para generar un evento aleatorio
function generateRandomEvent(): Event {
    // Lista de posibles eventos
    const possibleEvents: Event[] = [
        {
            affectHealth: (spaceship: Spaceship) => {
                // Reducir la salud de la nave
                spaceship.health -= Math.floor(Math.random() * 20) + 10; // Reducir entre 10 y 30 de salud
            },
            affectCargoCapacity: (spaceship: Spaceship) => {
                // No afectar la capacidad de carga en este evento
            },
            affectSpeed: (spaceship: Spaceship) => {
                // No afectar la velocidad en este evento
            }
        },
        {
            affectHealth: (spaceship: Spaceship) => {
                // No afectar la salud en este evento
            },
            affectCargoCapacity: (spaceship: Spaceship) => {
                // Incrementar la capacidad de carga de la nave
                spaceship.cargoCapacity += Math.floor(Math.random() * 10) + 5; // Incrementar entre 5 y 15 la capacidad de carga
            },
            affectSpeed: (spaceship: Spaceship) => {
                // No afectar la velocidad en este evento
            }
        },
    ];

    // Selecciona un evento aleatorio de la lista de posibles eventos
    const randomIndex: number = Math.floor(Math.random() * possibleEvents.length);
    return possibleEvents[randomIndex];
}

export { generateRandomEvent };

// Iniciar el juego
startGame();
