import { useState } from "react"
import { NavListItem } from "./primitive/NavListItem"
export const Navigation = () => {

    const [path, setPath] = useState(window.location.pathname.slice(1))

    const isCurrent = (page: string) => page === path

    return (
        <ul className="flex items-center justify-center w-full bg-darksm h-16 px-64">
            <NavListItem onClick={() => setPath("")} label="Home" to="" isActive={isCurrent("")} />
            <NavListItem onClick={() => setPath("graph")} label="Graph" to="graph" isActive={isCurrent("graph")} />
            <NavListItem onClick={() => setPath("maze")} label="Maze" to="maze" isActive={isCurrent("maze")} />
        </ul>
    )
}