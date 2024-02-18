import { ButtonDarkSM } from "../stories/Button.stories"
import { AiOutlineArrowRight } from "react-icons/ai";
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
        setResultPath
        } = props

    const setExample = () => {
        setPoints(ExampleData)
    }
    const clear = () => {
        setPoints([])
        setResultPath([])
    }
    const setStart = (start: number) => {
        setPathPoints((old: number[]) =>  [start, old[1]])
    }
    const setEnd = (end: number) => {
        setPathPoints((old: number[]) => [old[0], end])
    }
    const handleResultPath = () => {
        const result = findPath(points, pathPoints[1], pathPoints[0])
        result.pop()
        setResultPath(result)
    }

    return (
        <div className='flex items-center justify-center gap-8 px-8 h-16 bg-darksm'>
            <div className="flex justify-center bg-lightTeal p-2 rounded-xl gap-2">
                <Button {...ButtonDarkSM.args} label="Points" onClick={() => setMode("addPoint")} />
                <Button {...ButtonDarkSM.args} label="Connections" onClick={() => setMode("addConnection")} />
                <Button {...ButtonDarkSM.args} label="Delete" onClick={() => setMode("deletePoint")} />
                <Button {...ButtonDarkSM.args} label="Example" onClick={setExample}/>
                <Button {...ButtonDarkSM.args} label="Clear"  onClick={clear}/>
            </div>
            <div className="flex justify-center bg-lightTeal p-2 rounded-xl gap-2">
                <DropMenu label="Start" options={points.map((item: Point) => item.id)} onChange={setStart}/>
                <AiOutlineArrowRight size="35" color="#2E4F4F"/>
                <DropMenu label="End" options={points.map((item: Point) => item.id)} onChange={setEnd}/>
                <Button {...ButtonDarkSM.args} label="Path" onClick={handleResultPath} />
            </div>
        </div>

    )
}