import { useState } from "react";
import { Link } from "react-router-dom"

type NavListItemProps = {
    label: string,
    to: string,
    isActive: boolean,
    onClick: () => void
}

export const NavListItem = (props: NavListItemProps) => {
    const {
        label,
        to,
        isActive,
        onClick
    } = props

    const [isHover, setIsHover] = useState(false)


    const style={
        backgroundColor: (isHover || isActive) ? "#CBE4DE" : "transparent",
        color: (isHover || isActive) ? "#2E4F4F" : "#CBE4DE",
        transitionDuration: "0.3s"
    }

    return (
        <li 
            className="flex justify-center items-center w-1/3 h-[70%] m-2 p-2 rounded-xl"
            style={style}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={onClick}
            >
            <Link
                className="w-full h-full text-center font-bold text-2xl"
                to={to}>{label}
            </Link>
        </li>
    );
};