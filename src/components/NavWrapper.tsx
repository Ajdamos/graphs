import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export const NavbarWrapper = () => {
    return (
    <div className="overflow-hidden w-full h-full bg-lightTeal">
        <Navigation/>
        <Outlet/>
    </div>
    )
};