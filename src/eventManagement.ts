// eventManagement.ts

// Exporta la interfaz Event
export interface Event {
    affectHealth(spaceship: Spaceship): void;
    affectCargoCapacity(spaceship: Spaceship): void;
    affectSpeed(spaceship: Spaceship): void;
}

// Importar y usar Spaceship si es necesario
import { Spaceship } from "./spaceship";

// Función para simular un evento aleatorio
export function simulateRandomEvent(event: Event, spaceship: Spaceship): void {
    // Lógica para simular el evento aleatorio
    console.log("¡Ha ocurrido un evento aleatorio!");
    
    // Aplicar los efectos del evento en la nave espacial
    event.affectHealth(spaceship);
    event.affectCargoCapacity(spaceship);
    event.affectSpeed(spaceship);
}
