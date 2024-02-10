import { useState } from "react";import { GridContainer } from "../components/GridContainer";


export const Maze = () => {
    const [size, setSize] = useState([]);

    return (
        <div>
            <h1> Size of the maze {size.width}/{size.height}</h1>
            <GridContainer size={size} />
        </div>
    )
}