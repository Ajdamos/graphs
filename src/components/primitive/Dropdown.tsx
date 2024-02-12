import Dropdown from 'react-dropdown';

const DropMenu = (props: {label: string ,options: [number], onChange: () => unknown}) => {
    const defaultOption = props.options[0];

    return (
        <Dropdown
            className='flex justify-center items-center border-2 border-black w-32 h-8 rounded-lg'
            options={props.options}
            value={defaultOption?.toString()}
            placeholder={props.label}    
            onChange={select => props.onChange(select.value)}
        />
        )
}

export default DropMenu