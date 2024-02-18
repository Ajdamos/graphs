import { pathRecursive } from "./pathRecursive"

export function solverSingle(data, start, end){
    const queue = [start]
    const paths = {[start]: 0}
    for (let node = 0; node < Object.keys(data).length; node++){
        data[queue[node]].forEach(neighbour => {
            if(!Object.keys(paths).includes(neighbour.toString())) {
                paths[neighbour] = queue[node]   
            }

            if(!queue.includes(neighbour)) {
                queue.push(neighbour)                
            }
        })
        
        
    }
    return pathRecursive(paths, end)
}