export function getPathRecursive(paths, value){
    if(value === 0) return ""
    return (value.toString() + " " + getPathRecursive(paths, paths[value]))
}