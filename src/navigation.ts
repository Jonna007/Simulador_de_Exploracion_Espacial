// navigation.ts

// Definir los tipos de unión para las direcciones de movimiento
type Direction = "north" | "south" | "east" | "west";

// Función para la exploración
function explore(direction: Direction): void {
    // Lógica para mover la nave espacial en la dirección especificada
    console.log(`Explorando en dirección ${direction}`);
}

// Exportar la función explore para que pueda ser utilizada en otros archivos
export { explore };
