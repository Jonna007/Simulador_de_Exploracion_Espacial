"use strict";
// eventManagement.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateRandomEvent = void 0;
// Función para simular un evento aleatorio
function simulateRandomEvent(event, spaceship) {
    // Lógica para simular el evento aleatorio
    console.log("¡Ha ocurrido un evento aleatorio!");
    // Aplicar los efectos del evento en la nave espacial
    event.affectHealth(spaceship);
    event.affectCargoCapacity(spaceship);
    event.affectSpeed(spaceship);
}
exports.simulateRandomEvent = simulateRandomEvent;
