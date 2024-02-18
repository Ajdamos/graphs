import { useState, useEffect } from "react";
import { solveMaze } from "../utils/solveMaze";
import { mazeParentRecursive } from "../utils/mazeParentRecursive";


export const useSolveMaze = (maze: number[][], setMaze: (old: number[][]) => void) => {
    const [run, setRun] = useState(false);

    useEffect(() => {
        function colorPath(position: number[], color: number) {
            if(maze[position[0]][position[1]] === 3 || maze[position[0]][position[1]] === 4) return
            setMaze( old => {
                const temp = [...old]
                temp[position[0]][position[1]] = color
                return temp
                })
            }

        if(run) {
            const checked = solveMaze(maze);
            if(checked === null || checked === undefined) {
                setRun(false)
                return
            }
            const numbers = mazeParentRecursive(checked[checked.length - 1])
            const path: number[][] = []
            while(numbers.length > 0) {
                path.push(numbers.splice(0, 2));
            }
            path.pop()
            
            
            let i = 0
            let j = 0
            const interval1 = setInterval(() => {
                colorPath(checked[i].position, 5)
                i++
                if(i === checked.length) clearInterval(interval1)
            }, 100)
            setTimeout(() => {
                const interval2 = setInterval(() => {
                    colorPath(path[j], 6)
                    j++
                    if(j === path.length) clearInterval(interval2)
                }, 100)
            }, 500 + checked.length * 100)
            

        }
        setRun(false);
    }, [run]);

    return [setRun];
}