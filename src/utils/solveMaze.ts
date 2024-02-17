import { findPosition2dArray } from "./findPosition2dArray";

type Node = {
    position: number[]
    parent: Node | null
}

export function solveMaze (maze: number[][]) {
    const start = findPosition2dArray(maze, 3);
    const end = findPosition2dArray(maze, 4);
    if(start === null || end === null) {
        alert("start or end not found in maze")
        return null
    } 
   
    let open = [{position: start, parent: null}];
    const closed = [];
    let current: Node = {position: start, parent: null}
    for(let i = 0; i < (maze.length * maze[0].length + 10); i++) {
            current = findLowestFCost(open, start, end)
            if(current.position === undefined){
                console.log("end not found")
                return null
            }
            closed.push(current);
            if(maze[current.position[0]][current.position[1]] === 4) {
                return closed
            }
            
            open = open.filter(i => i !== current);
            open = open.concat(checkNeighbours(current, closed, maze).filter(i => !includesWithArrays(open, i)))

        }
}

function nodeDistance(first: number[], second: number[]) {
    return  Math.sqrt((Math.abs(first[0] - second[0]) ** 2) + (Math.abs(first[1] - second[1]) ** 2))
}

function findLowestFCost(array: Node[], start: number[], end: number[]) {
    let lowest = array[0];

    for(let i = 1; i < array.length; i++) {
        if((nodeDistance(array[i].position, start) + (nodeDistance(array[i].position, end)) * 1.2) < (nodeDistance(lowest.position, start) + (nodeDistance(lowest.position, end) * 1.2))) lowest = array[i];
    }
    return lowest
}


function checkNeighbours(current: Node, closed: Node[], maze: number[][]){
    const neighbours = [];
    const x = current.position[1];
    const y = current.position[0];
    if (y !== 0) if(maze[(y - 1)][x] !== 2 && !includesWithArrays(closed,{position: [y - 1, x], parent: null})) neighbours.push({position: [y - 1, x], parent: current});
    if (y < maze.length - 1) if(maze[y + 1][x] !== 2 && !includesWithArrays(closed,{position: [y + 1, x], parent: null})) neighbours.push({position: [y + 1, x], parent: current});
    if (x !== 0) if(maze[y][x - 1] !== 2 && !includesWithArrays(closed,{position: [y, x - 1], parent: null})) neighbours.push({position: [y, x - 1], parent: current});
    if (x !== maze[0].length) if(maze[y][x + 1] !== 2 && !includesWithArrays(closed,{position: [y, x + 1], parent: null})) neighbours.push({position: [y, x + 1], parent: current});
    return neighbours;
}

function includesWithArrays(array: Node[], value: Node) {
    for(let i = 0; i < array.length; i++) {
        if(array[i].position[0]=== value.position[0] && array[i].position[1] === value.position[1]) return true;
    }
    return false;
}