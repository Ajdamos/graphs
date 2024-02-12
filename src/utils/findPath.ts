import { solverSingle } from "./solverSingle"

const findPath = (points, start: number, end: number) => {
    const graph = {}
    points.forEach(item => {
        if(item.connections.length !== 0) graph[item.id] = item.connections.filter(i => i !== 0)
    })
    return solverSingle(graph, start, end).split(" ")
}
export default findPath