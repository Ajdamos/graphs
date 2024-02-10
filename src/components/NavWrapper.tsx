import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export const NavbarWrapper = () => {
    return (
    <div>
        <Navigation/>
        <Outlet/>
    </div>
    )
};