import { useState } from "react"
import { MazeContainer } from "../components/MazeContainer"
import { MazeMenu } from "../components/MazeMenu"

type mazeSize = 'tiny' | 'small' | 'medium' | 'large' | 'huge'
type mazeMode = 'block' | 'start' | 'end' | 'delete'

export const Maze = () => {
    const [mazeSize, setMazeSize] = useState<mazeSize>("medium")
    const [mode, setMode] = useState<mazeMode>("block")
    return (
        <div>
            <MazeMenu setSize={setMazeSize} setMode={setMode} mode={mode}/>
            <MazeContainer size={mazeSize} mode={mode}/> 
        </div>
    )
}