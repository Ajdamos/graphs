import { useState } from 'react';

import { GraphCanvas } from '../components/GraphCanvas';
import { GraphMenu } from '../components/GraphMenu';

export const Graph = () => {

    const [mode, setMode] = useState("addPoint")
    const [points, setPoints] = useState([])
    const [pathPoints, setPathPoints] = useState([0, 0])
    const [resultPath, setResultPath] = useState([])
    const [chosenPoints, setChosenPoints] = useState([0, 0])
    return (
        <div className='flex'>
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
            <GraphMenu 
                setMode={setMode}
                points={points}
                setPoints={setPoints}
                pathPoints={pathPoints}
                setPathPoints={setPathPoints}
                resultPath={resultPath}  
                setResultPath={setResultPath} 
                />
        </div>
    )
}