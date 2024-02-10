import { useRef, useEffect, useState } from 'react';
import { getCircleDistance } from '../utils/getCircleDistance';
import { solverSingle } from '../utils/solverSingle';
import ExampleData from '../data/sampleDataGraph';

export const Canvas = (props) => {
    const {
        mode, 
        setMode,
        points,
        setPoints,
        pathPoints,
        setPathPoints, 
        chosenPoints,
        setChosenPoints
        } = props



    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.clearRect(0, 0, canvas.width, canvas.height)

        points.forEach(item => {
            item.connections.forEach(connection => {
                context.beginPath();
                context.moveTo(item.x, item.y)
                context.lineTo(points.find(point => point.id === connection).x, points.find(point => point.id === connection).y)
                context.stroke();
            })
        })
        points.forEach(item => {
            context.beginPath();
            context.font = "26px Arial";
            context.fillText(item.id, item.x - 10, item.y + 10)
            context.arc(item.x, item.y, 20, 0, 2 * Math.PI);
            context.stroke();
        })
        
    }, [points]);

    const handleModeExecution = (e) => {
        switch (mode) {
            case "addPoint":
                addPoint(e)
                break;
            case "addConnection":
                addConnection(e)
                break;
        }
    }

    const setExample = () => {
        setPoints(ExampleData)
    }

    const clear = () => {
        setPoints([])
    }
    const addConnection = (e) => {
        const x = e.clientX - e.currentTarget.getBoundingClientRect().x
        const y = e.clientY - e.currentTarget.getBoundingClientRect().y
        const foundPoint = points.find(item => getCircleDistance(x, y ,item.x, item.y) < 20)
        if(chosenPoints[0] === null && foundPoint !== undefined) return setChosenPoints([foundPoint.id, null])
        if(chosenPoints[0] !== null && chosenPoints[0] !== foundPoint?.id && foundPoint !== undefined) {
            let newPoints = points.map(item => {
                if(item.id === chosenPoints[0]) {
                    item.connections.push(foundPoint.id)
                }
                if(item.id === foundPoint.id) {
                    item.connections.push(chosenPoints[0])
                }
                return item
            }) 
            setPoints(newPoints)
            setChosenPoints([null, null])
            console.log(points)
        }
    }
    const getGraphObject = () => {
        let graph = {}
        points.forEach(item => {
            if(item.connections.length !== 0) graph[item.id] = item.connections
        })
        console.log(graph)
        return graph
    }

    const addPoint = (e) => {
        let newPoint = {
            x: e.clientX - e.currentTarget.getBoundingClientRect().x, 
            y: e.clientY - e.currentTarget.getBoundingClientRect().y, 
            id: points.length + 1, 
            connections: []
        }
        if(points.some( item => getCircleDistance(newPoint.x, newPoint.y, item.x, item.y) < 50)) return
        setPoints(old => [...old, newPoint])
    }
    
return (
    <>
        <canvas className='m-[100px] border-2 border-black' ref={canvasRef} onClick={e => handleModeExecution(e)} width={500} height={500} />
        <button onClick={() => setMode("addConnection")}>Connection</button>
            <button onClick={() => setMode("addPoint")}>Point</button>
            <button onClick={() => console.log(solverSingle(getGraphObject(), pathPoints[0], pathPoints[1]))}>graph</button>
            <button onClick={() => setExample()}>Example</button>
            <button onClick={() => clear()}>clear</button>
            <input className='border-2 border-black w-16 h-8' type="number" onChange={e => setPathPoints(old => [e.target.value, old[1]])} value={pathPoints[0]} />
            <input className='border-2 border-black w-16 h-8' type="number" onChange={e => setPathPoints(old => [old[0], e.target.value])} value={pathPoints[1]} />
    </>
)
}