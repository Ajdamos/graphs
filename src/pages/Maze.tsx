import { useState } from "react"
import { MazeContainer } from "../components/MazeContainer"
import { MazeMenu } from "../components/MazeMenu"
import { useMaze } from "../hooks/useMaze"
import { useSolveMaze } from "../hooks/useSolveMaze"

type mazeSize = 'tiny' | 'small' | 'medium' | 'large' | 'huge'
type mazeMode = 'block' | 'start' | 'end' | 'delete'

export const Maze = () => {
    const [size, setSize] = useState<mazeSize>("medium")
    const [mode, setMode] = useState<mazeMode>("block")
    
    const [delay, setDelay] = useState(1)
    const [maze, setMaze, setReset] = useMaze(size, mode)
    const [setRun] = useSolveMaze(maze, setMaze)

    return (
        <>
        <div className="invisible md:visible">
            <MazeMenu 
                setSize={setSize} 
                setMode={setMode} 
                mode={mode} 
                delay={delay}
                setReset={setReset}
                setRun={setRun}
                />

            <MazeContainer 
                size={size} 
                mode={mode}
                maze={maze}
                setMaze={setMaze}
                /> 
        </div>
        <div className="absolute -z-10 top-0 left-0 flex w-full h-full justify-center items-center visible md:invisible bg-[lightcyan]">
            <h1 className="text-4xl text-center">Use on computer</h1>
        </div>
        </>
        
    )
}