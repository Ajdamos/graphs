import { NodeM } from "../types/Maze";
import { nodeDistance } from "./nodeDistance";

export function lowestFCost(array: NodeM[], start: number[], end: number[]) {
    let lowest = array[0];

    for(let i = 1; i < array.length; i++) {
        if((nodeDistance(array[i].position, start) + (nodeDistance(array[i].position, end)) * 1.2) < (nodeDistance(lowest.position, start) + (nodeDistance(lowest.position, end) * 1.2))) lowest = array[i];
    }
    return lowest
}
