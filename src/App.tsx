import { useEffect } from "react"
import { Landing } from "./pages/Landing"
import { solverSingle } from "./utils/solverSingle"
import data from "./data/mazeSingle"
import { Canvas } from "./components/Canvas"
function App() {

  useEffect(() => {
    console.log(solverSingle(data, 1, 12))
  } ,[])

  return (    
    <Canvas />
  )
}

export default App
