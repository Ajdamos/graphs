import { MazeCell } from './primitive/MazeCell';
import { UseWindowSize } from '../hooks/useWindowSize';
import  IdentifierTemplate  from '../data/mazeIdentifierData';


export const MazeContainer = (props) => {
  const { 
    mode,
    maze,
    setMaze
  } = props

  const mazeSize = UseWindowSize() 

  const handleMazeChange = (row: number, col: number) => {
    setMaze((old: number[][]) => {
      let temp = [...old]
      temp = temp.map((row: number[]) => row.map((col: number) => {
        if(col === 5 || col === 6) col = 1
        return col
      }))
      temp[row][col] = IdentifierTemplate[mode as keyof typeof IdentifierTemplate]
      return temp
    })
  }

  return (
    <div className='flex flex-col bg-lightBlue' style={{height: mazeSize[1]}}>
      {
        maze.map((row, rowI: number) => {
          return (
            <div className='flex' key={rowI} draggable={false} >
              {
              row.map((identifier: number, colI: number) => (
                <MazeCell 
                  key=  {colI + " " + rowI} 
                  style={{width: mazeSize[0]/maze[0].length, height: mazeSize[1]/maze.length}} 
                  row=  {rowI}
                  col=  {colI}
                  identifier={identifier}
                  changeMaze={handleMazeChange}
                  />
              ))
              }
            </div>
          );
        })
      }
    </div>
  );
};


