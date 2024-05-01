import { explore } from "./navigation";
import { collectResources } from "./resourceManagement";
import { simulateRandomEvent } from "./eventManagement";
import { Spaceship } from "./spaceship";
import { Planet, ResourceType } from "./planet";
import { Event } from "./eventManagement";

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
        simulateRandomEvent(generateRandomEvent(), spaceship);

        // Salir del bucle principal si la salud de la nave llega a cero
        if (spaceship.health <= 0) {
            console.log("La nave ha sido destruida. Fin del juego.");
            break;
        }
    }
}



// Iniciar el juego
startGame();

function generateRandomEvent(): Event {
    return {
        affectHealth: (spaceship: any) => {
            // Implementa el efecto del evento en la salud de la nave
        },
        affectCargoCapacity: (spaceship: any) => {
            // Implementa el efecto del evento en la capacidad de carga de la nave
        },
        affectSpeed: (spaceship: any) => {
            // Implementa el efecto del evento en la velocidad de la nave
        }};
}