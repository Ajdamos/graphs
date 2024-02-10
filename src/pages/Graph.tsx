import { useState } from 'react';

import { Canvas } from '../components/Canvas';
import { GraphMenu } from '../components/GraphMenu';

export const Graph = () => {

    const [mode, setMode] = useState("addPoint")
    const [points, setPoints] = useState([])
    const [pathPoints, setPathPoints] = useState([0, 0])
    const [chosenPoints, setChosenPoints] = useState([0, 0])
    return (
        <div className='flex'>
            <Canvas 
                mode={mode}
                setMode={setMode}
                points={points}
                setPoints={setPoints}
                pathPoints={pathPoints}
                setPathPoints={setPathPoints}
                chosenPoints={chosenPoints}
                setChosenPoints={setChosenPoints}   
                />
            <GraphMenu 
                mode={mode}
                setMode={setMode}
                points={points}
                setPoints={setPoints}
                pathPoints={pathPoints}
                setPathPoints={setPathPoints}
                chosenPoints={chosenPoints}
                setChosenPoints={setChosenPoints}   
                />
        </div>
    )
}