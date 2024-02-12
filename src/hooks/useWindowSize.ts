import { useEffect, useState } from "react";

export const UseWindowSize = () => {
    const [mazeSize, setMazeSize] = useState([window.innerWidth, window.innerHeight - 128])
    useEffect(() => {
        const changeWindowSize = ()=>{
            setMazeSize([window.innerWidth, window.innerHeight - 128]);
        }
        window.addEventListener("resize", changeWindowSize);

        return ()=> window.removeEventListener('resize', changeWindowSize);
    }, [])

    return mazeSize
}