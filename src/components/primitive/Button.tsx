
type IButtonProps = {
    label: string
    backgroundColor: string
    size: 'small' | 'medium' | 'large'
}

const Button = (props: IButtonProps) => {

    const style = {
        backgroundColor: props.backgroundColor,
        fontSize: props.size === 'small' ? '12px' : props.size === 'medium' ? '16px' : '24px',
        padding: props.size === 'small' ? '8px' : props.size === 'medium' ? '16px' : '24px'
    }

    return (
        <button style={style}>
            {props.label}
        </button>
    )
}

export default Button