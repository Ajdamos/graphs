import { NodeM } from "../types/Maze";

export function includes2d(array: NodeM[], value: NodeM) {
    for(let i = 0; i < array.length; i++) {
        if(array[i].position[0]=== value.position[0] && array[i].position[1] === value.position[1]) return true;
    }
    return false;
}