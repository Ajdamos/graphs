import { useState } from "react"
import IdentifierTemplate from "../data/mazeIdentifierData"
type MazeCellProps = {
    identifier: number // 1 empty, 2 block, 3 start, 4 end
    row: number
    col: number
    style: {width: number, height: number}
}
export const MazeCell = (props: MazeCellProps) => {

    const {
        identifier
    } = props

    
    const handleIdentifierBackground = () => {
        let color;
        switch (props.identifier) {
            case 1:
                color = "white"
                break;
            case 2:
                color = "orange"
                break;
            case 3:
                color = "MediumSeaGreen"
                break;
            case 4:
                color = "Tomato"
                break;
            case 5:
                color = "DodgerBlue"
                break;
        }
        return color
    }

    const [hover, setHover] = useState(false)
    const style = {
        ...props.style,
        backgroundColor: hover && identifier === 1 ? "LightGray" : handleIdentifierBackground()
    }

    

    return (
        <div 
            className="flex justify-center items-center font-bold border-black border-2 transition" 
            style={style}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => props.changeMaze(props.row, props.col)}
            >
            </div>
    )
} 