export function pathRecursive(paths: number[], value: number){
    if(value === 0) return ""
    return (value.toString() + " " + pathRecursive(paths, paths[value]))
}