// planet.ts

enum ResourceType {
    Water,
    Oxygen,
    Minerals,
}

class Planet {
    constructor(public resourceType: ResourceType, public dangerLevel: number) {}
}

export { ResourceType, Planet };