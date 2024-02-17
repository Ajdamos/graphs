import { NavListItem } from "./primitive/NavListItem"
import { useState } from "react"

export const Navigation = () => {

    const [path, setPath] = useState("")

    
    
    const isCurrent = (page: string) => {
        return page === path       
    }



    return (
        <ul className="flex items-center justify-center w-full bg-darksm h-16 px-64">
            <NavListItem onClick={() => setPath("")} label="Home" to="" isActive={isCurrent("")} />
            <NavListItem onClick={() => setPath("graph")} label="Graph" to="graph" isActive={isCurrent("graph")} />
            <NavListItem onClick={() => setPath("maze")} label="Maze" to="maze" isActive={isCurrent("maze")} />
        </ul>
    )
}