import { NodeM } from "../types/Maze"

export function mazeParentRecursive(array: NodeM){
    if(array.parent === null) return
    return array.position.concat(mazeParentRecursive(array.parent))
}
