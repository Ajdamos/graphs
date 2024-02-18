import { useRef, useEffect } from 'react';
import { nodeDistance } from '../utils/nodeDistance';
import { Point } from '../types/Graph';

export const GraphCanvas = (props) => {

    const {
        mode, 
        points,
        setPoints, 
        chosenPoints,
        setChosenPoints,
        resultPath,
        } = props


    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.clearRect(0, 0, canvas.width, canvas.height)

        points.forEach((item: Point) => {
            item.connections.forEach(connection => {
                context.beginPath();
                context.moveTo(item.x, item.y)
                context.lineTo(points.find((point: Point) => point.id === connection)?.x, points.find((point: Point) => point.id === connection)?.y)
                context.stroke();
            })
        })
        points.forEach((item: Point) => {
            context.beginPath();
            context.font = "26px Arial";

            context.fillText(item.id, item.x - 10, item.y + 10)
            context.arc(item.x, item.y, 20, 0, 2 * Math.PI);
            context.stroke();
        })
        
    }, [points, resultPath]);

    const handleModeExecution = (e: React.MouseEvent<HTMLElement>) => {
        switch (mode) {
            case "addPoint":
                addPoint(e)
                break;
            case "addConnection":
                addConnection(e)
                break;
            case "deletePoint":
                deletePoint(e)
                break;
        }
    }
    const deletePoint = (e: React.MouseEvent<HTMLElement>) => {
        const x = e.clientX - e.currentTarget.getBoundingClientRect().x
        const y = e.clientY - e.currentTarget.getBoundingClientRect().y
        const foundPoint = points.find((item: Point) => nodeDistance([x, y], [item.x, item.y]) < 20)
        if(foundPoint !== undefined) {
            let newPoints = points.filter((item: Point) => item.id !== foundPoint.id)
            newPoints = newPoints.map((item: Point) => {
                item.connections = item.connections.filter((connection: number) => connection !== foundPoint.id)
                if(item.id > foundPoint.id) item.id -= 1
                return item
            })

            setPoints(newPoints)
        }
    }

    const addConnection = (e: React.MouseEvent<HTMLElement>) => {
        const x = e.clientX - e.currentTarget.getBoundingClientRect().x
        const y = e.clientY - e.currentTarget.getBoundingClientRect().y
        
        const foundPoint = points.find((item: Point) => nodeDistance([x, y], [item.x, item.y]) < 20)
        if(chosenPoints[0] === null && foundPoint !== undefined) return setChosenPoints([foundPoint.id, null])
        if(chosenPoints[0] !== null && chosenPoints[0] !== foundPoint?.id && foundPoint !== undefined) {
            const newPoints = points.map((item: Point) => {
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
        }
    }

    const addPoint = (e: React.MouseEvent<HTMLElement>) => {
        const newPoint = {
            x: e.clientX - e.currentTarget.getBoundingClientRect().x, 
            y: e.clientY - e.currentTarget.getBoundingClientRect().y, 
            id: points.length + 1, 
            connections: []
        }
        if(points.some((item: Point) => nodeDistance([newPoint.x, newPoint.y], [item.x, item.y]) < 50)) return
        setPoints((old: [Point]) => [...old, newPoint])
    }
    
return (
    <div className='flex flex-col items-center h-full justify-around bg-lightTeal overflow-hidden'>

        <canvas 
            className='mx-[100px] my-[50px] border-2 border-black bg-white' 
            ref={canvasRef} 
            onClick={handleModeExecution} 
            width={window.innerWidth - 200} 
            height={window.innerHeight - 328} 
            />
        {   
            resultPath.length ?
            <div className='p-4 bg-darksm rounded-xl'>
                <div className='flex justify-center h-3 items-center text-lightTeal font-bold text-2xl m-2'>{resultPath.join(" → ")}</div>
            </div> :
            null
        }
    </div>
)
}