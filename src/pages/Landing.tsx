import React from "react"
import Button from "../components/primitive/Button"
import { ButtonDarkSM } from "../stories/Button.stories"

export const Landing = () => {

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="text-4xl text-darksm font-bold h-16 mt-36 text-center">Path Solving by Adam Černoš</h1>
            <p className="p-4 m-4 text-darksm text-3xl w-[60%] text-center">
                V tomto projektu se podíváme na různé algoritmy pro hledání cest v grafu či bludišti, byl použit například A* nebo Breadth-first search.
            </p>
            <a href="https://github.com/Ajdamos/graphs" target="_blank">
                <Button {...ButtonDarkSM.args} label="Github"/>
             </a>
        </div>
    )
}