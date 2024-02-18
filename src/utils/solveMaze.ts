import { position2dArray } from "./position2dArray";
import { lowestFCost } from "./lowestFCost";
import { NodeM } from "../types/Maze";
import { includes2d } from "./includes2d";

export function solveMaze (maze: number[][]) {
    const start = position2dArray(maze, 3);
    const end = position2dArray(maze, 4);
    if(start === null || end === null) {
        alert("start or end not found in maze")
        return null
    } 
   
    let open = [{position: start, parent: null}];
    const closed = [];
    let current: NodeM = {position: start, parent: null}
    for(let i = 0; i < (maze.length * maze[0].length + 10); i++) {
            current = lowestFCost(open, start, end)
            if(current.position === undefined){
                console.log("end not found")
                return null
            }
            closed.push(current);
            if(maze[current.position[0]][current.position[1]] === 4) {
                return closed
            }
            
            open = open.filter(i => i !== current);
            open = open.concat(checkNeighbours(current, closed, maze).filter(i => !includes2d(open, i)))

        }
}

function checkNeighbours(current: NodeM, closed: NodeM[], maze: number[][]){
    const neighbours = [];
    const x = current.position[1];
    const y = current.position[0];
    if (y !== 0) if(maze[(y - 1)][x] !== 2 && !includes2d(closed,{position: [y - 1, x], parent: null})) neighbours.push({position: [y - 1, x], parent: current});
    if (y < maze.length - 1) if(maze[y + 1][x] !== 2 && !includes2d(closed,{position: [y + 1, x], parent: null})) neighbours.push({position: [y + 1, x], parent: current});
    if (x !== 0) if(maze[y][x - 1] !== 2 && !includes2d(closed,{position: [y, x - 1], parent: null})) neighbours.push({position: [y, x - 1], parent: current});
    if (x < maze[0].length - 1) if(maze[y][x + 1] !== 2 && !includes2d(closed,{position: [y, x + 1], parent: null})) neighbours.push({position: [y, x + 1], parent: current});
    return neighbours;
}

