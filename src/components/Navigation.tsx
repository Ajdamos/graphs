import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <ul className="flex items-center justify-around w-full border-b-2 border-black h-16 px-32">
            <li><Link to="">Home</Link></li>
            <li><Link to="graph">Graph</Link></li>
            <li><Link to="maze">Maze</Link></li> 
            <div>Graph</div>
        </ul>
    )
}