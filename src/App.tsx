import { RouterProvider } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { router } from "./utils/Router"

function App() {
  return ( 
    <>
      <RouterProvider router={router}/>
    </>   
  )
}

export default App
