import { createBrowserRouter } from "react-router-dom";

import { Graph } from "../pages/Graph";
import { Landing } from "../pages/Landing";
import { Maze } from "../pages/Maze";
import { NavbarWrapper } from "../components/NavWrapper";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarWrapper/>,
        children:[
        {
            path:"/",
            element: <Landing />
        },
        {
            path:"/maze",
            element: <Maze />
        },
        {
            path:"/graph",
            element: <Graph />
        }]
    }
]);
    
    
