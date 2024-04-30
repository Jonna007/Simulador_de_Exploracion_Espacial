// eventManagement.ts

import { Spaceship } from "./spaceship";

// Interfaz para representar eventos aleatorios
interface Event {
    affectHealth(spaceship: Spaceship): void;
    affectCargoCapacity(spaceship: Spaceship): void;
    affectSpeed(spaceship: Spaceship): void;
}

// Función para simular un evento aleatorio
function simulateRandomEvent(event: Event, spaceship: Spaceship): void {
    // Lógica para simular el evento aleatorio
    console.log("¡Ha ocurrido un evento aleatorio!");
    
    // Aplicar los efectos del evento en la nave espacial
    event.affectHealth(spaceship);
    event.affectCargoCapacity(spaceship);
    event.affectSpeed(spaceship);
}

// Exportar la función simulateRandomEvent para que pueda ser utilizada en otros archivos
export { simulateRandomEvent };
