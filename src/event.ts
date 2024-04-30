// event.ts

interface Event {
    affectHealth(spaceship: Spaceship): void;
    affectCargoCapacity(spaceship: Spaceship): void;
    affectSpeed(spaceship: Spaceship): void;
}


import { Spaceship } from './spaceship';
export { Event };