import { useEffect, useState } from "react"
import Template from '../data/mazeTemplateData'
import { useMouse } from "./useMouse"

export const useMaze = (size) => {
    const [maze, setMaze] = useState<Array<Array<number>>>([...Array(Template[size as keyof typeof Template].rows)].map(() => Array(Template[size as keyof typeof Template].cols).fill(1))) // Fix: Provide the correct type for the maze state
    const mouse = useMouse()
    
    useEffect(() => {
        console.log(mouse[0] / (window.innerWidth / Template[size].cols), mouse[0], Template[size].cols)
    }, [mouse])
    return [maze, setMaze]
}
