import { Point } from "../types/Graph"
import { solverSingle } from "./solverSingle"

const findPath = (points: Point[], start: number, end: number) => {
    const graph: number[][] = [] 
    points.forEach((item: Point) => {
        if(item.connections.length !== 0) graph[item.id] = item.connections.filter(i => i !== 0)
    })
    return solverSingle(graph, start, end).split(" ")
}
export default findPath