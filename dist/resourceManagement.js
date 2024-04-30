"use strict";
// resourceManagement.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectResources = void 0;
const planet_1 = require("./planet");
// Función para la recolección de recursos
function collectResources(planetResourceType, spaceship) {
    // Lógica para recolectar recursos del planeta
    console.log(`Recolectando recursos de tipo ${planet_1.ResourceType[planetResourceType]}`);
}
exports.collectResources = collectResources;
