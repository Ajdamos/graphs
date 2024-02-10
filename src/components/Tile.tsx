

export const Tile = (props) => {
    const size = props.size 

    console.log(1/size.width)
    return (
        <div className="border-2 border-black m-0" style={{width: `${1/size.width * 100}%`, height: `${1/size.height * 100}%`}}>
        </div>
    )
}