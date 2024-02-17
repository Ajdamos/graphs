import { useState } from "react"
type MazeCellProps = {
    identifier: number // 1 empty, 2 block, 3 start, 4 end
    row: number
    col: number
    style: {width: number, height: number}
    changeMaze: (row: number, col: number) => void
}
export const MazeCell = (props: MazeCellProps) => {

    const handleIdentifierBackground = () => {
        let color;
        switch (props.identifier) {
            case 1:
                color = "#CBE4DE"
                break;
            case 2:
                color = "#2E4F4F"
                break;
            case 3:
                color = "DarkGreen"
                break;
            case 4:
                color = "FireBrick"
                break;
            case 5:
                color = "MediumSlateBlue"
                break;
            case 6:
                color = "LightGreen"
                break;
        }
        return color
    }

    const [hover, setHover] = useState(false)
    const style = {
        ...props.style,
        backgroundColor: hover && props.identifier === 1 ? "LightGray" : handleIdentifierBackground()
    }

    

    return (
        <div className="flex justify-center items-center font-bold border-[#111] border transition" 
            style={style}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => props.changeMaze(props.row, props.col)}
            >
        </div>
    )
} 