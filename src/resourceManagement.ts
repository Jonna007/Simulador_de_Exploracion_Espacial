// resourceManagement.ts

import { ResourceType } from "./planet";
import { Spaceship } from "./spaceship";

// Función para la recolección de recursos
function collectResources(planetResourceType: ResourceType, spaceship: Spaceship): void {
    // Lógica para recolectar recursos del planeta
    console.log(`Recolectando recursos de tipo ${ResourceType[planetResourceType]}`);
}

// Exportar la función collectResources para que pueda ser utilizada en otros archivos
export { collectResources };
