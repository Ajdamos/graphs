import { useRef, useEffect } from 'react';
import { getCircleDistance } from '../utils/getCircleDistance';
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
        }
    }

    const addConnection = (e: React.MouseEvent<HTMLElement>) => {
        const x = e.clientX - e.currentTarget.getBoundingClientRect().x
        const y = e.clientY - e.currentTarget.getBoundingClientRect().y
        
        const foundPoint = points.find((item: Point) => getCircleDistance(x, y ,item.x, item.y) < 20)
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
        if(points.some((item: Point) => getCircleDistance(newPoint.x, newPoint.y, item.x, item.y) < 50)) return
        setPoints((old: [Point]) => [...old, newPoint])
    }
    
return (
    <>
        <canvas className='m-[100px] border-2 border-black' ref={canvasRef} onClick={handleModeExecution} width={500} height={500} />
    </>
)
}