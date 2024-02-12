import { ButtonBlack, ButtonGreen, ButtonOrange, ButtonRed } from "../stories/Button.stories"
import Button from "./primitive/Button"


export const MazeMenu = (props) => {

    const {
        setSize,
        setMode
    } = props

    return (
        <div className="flex items-end justify-around px-8 h-16">
            <div className="flex justify-around items-center px-8 h-8">
                <Button {...ButtonBlack.args} onClick={() => setSize("tiny")} label="tiny"/>
                <Button {...ButtonBlack.args} onClick={() => setSize("small")} label="small"  />
                <Button {...ButtonBlack.args} onClick={() => setSize("medium")} label="medium" />
                <Button {...ButtonBlack.args} onClick={() => setSize("large")} label="large" />
                <Button {...ButtonBlack.args} onClick={() => setSize("huge")} label="huge"  />
            </div>
            <div className="flex justify-around items-center px-8 h-8">
                <Button {...ButtonOrange.args} onClick={() => setMode("block")}  label="Block"  />
                <Button {...ButtonGreen.args}  onClick={() => setMode("start")} label="Start" />
                <Button {...ButtonRed.args}    onClick={() => setMode("end")} label="End" />
                <Button {...ButtonBlack.args}  onClick={() => setMode("delete")} label="Delete"  />
            </div>
            
        </div>
    )
}