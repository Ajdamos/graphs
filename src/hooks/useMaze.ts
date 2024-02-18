 import { useEffect, useState } from "react"
import Template from '../data/mazeTemplateData'
import IdentifierTemplate from '../data/mazeIdentifierData'
import { useMouse } from "./useMouse"

export const useMaze = (size, mode) => {
    const [reset, setReset] = useState<boolean>(false)
    const [maze, setMaze] = useState<Array<Array<number>>>([]) // Fix: Provide the correct type for the maze state
    const mouse = useMouse()
    
    useEffect(() => {

        setMaze([...Array(Template[size as keyof typeof Template].rows)].map(() => Array(Template[size as keyof typeof Template].cols).fill(1)))
    }, [size, reset])

    useEffect(() => {
        const y: number = Math.ceil(mouse[1] / ((window.innerHeight - 128) / Template[size].rows))
        const x: number = Math.ceil(mouse[0] / (window.innerWidth / Template[size].cols))
        if(y < 1 || y > Template[size].rows || x < 1 || x > Template[size].cols) return
        setMaze(old => {
            let temp = [...old]
            if( mode === "start" || mode === "end"){
                temp = temp.map((row: number[]) => row.map((col: number) => {
                if(col === IdentifierTemplate[mode]) col = 1
                return col
            }))
            }   
            temp[y - 1][x - 1] = IdentifierTemplate[mode]
            return temp
    })}, [mouse])
    
    return [maze, setMaze, setReset]
}