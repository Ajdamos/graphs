import { ButtonBlack, ButtonBlue, ButtonRed } from "../stories/Button.stories"
import Button from "./primitive/Button"
import ExampleData from "../data/sampleDataGraph"
import findPath from "../utils/findPath";
import DropMenu from "./primitive/Dropdown";
import { Point } from '../types/Graph';


export const GraphMenu = (props) => {
    const {
        points,
        setPoints,
        pathPoints,
        setPathPoints,
        setMode,
        resultPath,
        setResultPath
        } = props

    const setExample = () => {
        setPoints(ExampleData)
    }
    const clear = () => {
        setPoints([])
    }
    const setStart = (start: number) => {
        setPathPoints([start, pathPoints[1]])
    }
    const setEnd = (end: number) => {
        setPathPoints([pathPoints[0], end])
    }
    const handleResultPath = () => {
        setResultPath(findPath(points, pathPoints[0], pathPoints[1]))
    }

    return (
        <div className='flex flex-col items-center'>
            
            <Button {...ButtonBlue.args} label="Points" onClick={() => setMode("addPoint")} />
            <Button {...ButtonBlack.args} label="Connections" onClick={() => setMode("addConnection")} />
            <Button {...ButtonRed.args} label="Path" onClick={handleResultPath} />
            <Button {...ButtonRed.args} label="Example" onClick={setExample}/>
            <Button {...ButtonRed.args} label="Clear"  onClick={clear}/>
            <div className="flex">
                <DropMenu label="Start" options={points.map((item: Point) => item.id)} onChange={setStart}/>
                <DropMenu label="Start" options={points.map((item: Point) => item.id)} onChange={setEnd}/>
            </div>
            <h1>{resultPath}</h1>
        </div>

    )
}