"use strict";
// planet.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planet = exports.ResourceType = void 0;
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Water"] = 0] = "Water";
    ResourceType[ResourceType["Oxygen"] = 1] = "Oxygen";
    ResourceType[ResourceType["Minerals"] = 2] = "Minerals";
})(ResourceType || (exports.ResourceType = ResourceType = {}));
class Planet {
    constructor(resourceType, dangerLevel) {
        this.resourceType = resourceType;
        this.dangerLevel = dangerLevel;
    }
}
exports.Planet = Planet;
