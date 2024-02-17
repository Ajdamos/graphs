
type node = {position: number[], parent: node}
export function getMazeParentRecursive(array: node){
    if(array.parent === null) return
    return array.position.concat(getMazeParentRecursive(array.parent))
}
