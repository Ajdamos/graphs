import { useState } from "react"

type IButtonProps = {
    label: string
    color: string
    size: 'small' | 'medium' | 'large'
    onClick?: () => void
    backgroundColor?: string
}

const Button = (props: IButtonProps) => {

    const [hover, setHover] = useState(false)


    const style = {
        border: `2px solid ${props.color === "white" ? "black" : props.color}`,
        backgroundColor: hover ? props.color: (props.backgroundColor ? props.backgroundColor : 'white'),
        color: hover ? (props.backgroundColor ? props.backgroundColor : 'white') : props.color,
        width: props.size === 'small' ? '56px' : props.size === 'medium' ? (hover ? '128px' : '116px') : '136px',
        height: props.size === 'small' ? '28px' : props.size === 'medium' ? '40px' : '56px',
        fontSize: props.size === 'small' ? '12px' : props.size === 'medium' ? '16px' : '24px',
        padding: props.size === 'small' ? '8px' : props.size === 'medium' ? '16px' : '24px',
    }

    return (
        <button 
            onClick={props.onClick}
            className="flex items-center justify-center rounded-lg font-bold p-2 transition-all" 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}    
            style={style}>
            {props.label}
        </button>
    )
}

export default Button