import { useEffect, useState } from "react"


export const useMouse = () => {
    const [mouse, setMouse] = useState([0, 0])

    useEffect(() => {
        const setMousePosition = (e: MouseEvent) => {
            if(e.buttons === 1) setMouse([e.clientX, e.clientY - 128])
        }
        window.addEventListener('mousemove', setMousePosition)

        return () => window.removeEventListener('mousemove', setMousePosition)
    }, [])

    return mouse
}