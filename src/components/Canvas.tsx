import { useRef, useEffect } from 'react';

const points = [
    {x: 25,y: 30, id: 1},
    {x: 50,y: 30, id: 1},
    {x: 25,y: 60, id: 1},
    {x: 50,y: 60, id: 1},
]

export const Canvas = () => {

const canvasRef = useRef(null);

useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    points.forEach(item => {
        context.beginPath();
        context.fillText(item.id, item.x, item.y)
        context.arc(item.x, item.y, 20, 0, 2 * Math.PI);
        context.stroke();
    })
     
}, []);

return (
    <canvas className='ml-[100px]' ref={canvasRef} onClick={e => console.log(e.currentTarget.getBoundingClientRect())} width={500} height={500} />
)
}