import Dropdown from 'react-dropdown';

type DropMenuProps = {
    label: string, 
    options: number[], 
    onChange: () => void
}

const DropMenu = (props: DropMenuProps) => {
    const defaultOption = props.label
    return (
        <Dropdown
            className='flex flex-col items-center text-center bg-lightTeal text-darksm font-bold text-l border-2 border-darksm w-[116px] h-10 p-2 rounded-lg'
            menuClassName='z-10 flex flex-col border-2 m-2 border-darksm bg-lightTeal text-darksm font-bold text-l w-[116px] p-2 rounded-lg'
            options={props.options}
            value={defaultOption.toString()}
            placeholder={props.label}    
            onChange={select => props.onChange(select.value)}
        />
        )
}

export default DropMenu