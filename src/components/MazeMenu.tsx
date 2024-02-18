import { ButtonDarkSM } from "../stories/Button.stories"
import Button from "./primitive/Button"


export const MazeMenu = (props) => {

    const {
        setSize,
        setMode,
        setReset,
        setRun
    } = props

    return (
        <div className='flex items-center justify-center gap-8 px-8 h-16 bg-darksm'>
            <div className="flex justify-center bg-lightTeal p-2 rounded-xl gap-2">
                <Button {...ButtonDarkSM.args}  onClick={() => setMode("start")} label="Start" />
                <Button {...ButtonDarkSM.args}    onClick={() => setMode("end")} label="End" />
                <Button {...ButtonDarkSM.args} onClick={() => setMode("block")}  label="Block"  />
                <Button {...ButtonDarkSM.args}  onClick={() => setMode("delete")} label="Delete"  />
            </div>
            <div className="flex justify-center bg-lightTeal p-2 rounded-xl gap-2">
                <Button {...ButtonDarkSM.args}  onClick={() => setRun((old: boolean) => !old)}  label="Run"  />
                <Button {...ButtonDarkSM.args} onClick={() => setReset((old: boolean) => !old)}  label="Clear"  />
            </div>
            <div className="flex justify-center bg-lightTeal p-2 rounded-xl gap-2">
                <Button {...ButtonDarkSM.args} onClick={() => setSize("tiny")} label="tiny"/>
                <Button {...ButtonDarkSM.args} onClick={() => setSize("small")} label="small"  />
                <Button {...ButtonDarkSM.args} onClick={() => setSize("medium")} label="medium" />
                <Button {...ButtonDarkSM.args} onClick={() => setSize("large")} label="large" />
                <Button {...ButtonDarkSM.args} onClick={() => setSize("huge")} label="huge"  />
            </div>
        </div>
    )
}