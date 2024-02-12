import { useEffect, useState } from "react"
import Template from '../data/mazeTemplateData'

export const useMaze = (size) => {
    const [maze, setMaze] = useState<Array<Array<null>>>([]) // Fix: Provide the correct type for the maze state

    useEffect(() => {
        console.log("2z")
        setMaze([...Array(Template[size as keyof typeof Template].rows)].map(() => Array(Template[size as keyof typeof Template].cols).fill(1))) // generate 
    }, [size])


    return [maze, setMaze]
}
