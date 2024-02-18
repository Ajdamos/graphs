import { useState } from 'react';

import { GraphCanvas } from '../components/GraphCanvas';
import { GraphMenu } from '../components/GraphMenu';

export const Graph = () => {
    const [mode, setMode] = useState("addPoint")
    const [points, setPoints] = useState([])
    const [pathPoints, setPathPoints] = useState([1, 1])
    const [resultPath, setResultPath] = useState([])
    const [chosenPoints, setChosenPoints] = useState([null, null])
    return (
        <div className='flex flex-col'>
            <GraphMenu 
                setMode={setMode}
                points={points}
                setPoints={setPoints}
                pathPoints={pathPoints}
                setPathPoints={setPathPoints}
                resultPath={resultPath}  
                setResultPath={setResultPath} 
                />
            <GraphCanvas 
                mode={mode}
                setMode={setMode}
                points={points}
                setPoints={setPoints}
                pathPoints={pathPoints}
                setPathPoints={setPathPoints}
                chosenPoints={chosenPoints}
                setChosenPoints={setChosenPoints}
                resultPath={resultPath}   
                />
        </div>
    )
}