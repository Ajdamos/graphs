import { MazeCell } from './MazeCell';
import { UseWindowSize } from '../hooks/useWindowSize';
import { useMaze } from '../hooks/useMaze';
import  IdentifierTemplate  from '../data/mazeIdentifierData';
import { useMouse } from '../hooks/useMouse';
import { useEffect } from 'react';
import mazeTemplateData from '../data/mazeTemplateData';

export const MazeContainer = (props) => {

  const mazeSize = UseWindowSize() //array [width of maze, height of maze]
  const [maze, setMaze] = useMaze(props.size)
  const mouse = useMouse()
  const handleMazeChange = (row, col) => {
    setMaze(old => {
    const temp = [...old]
    temp[row][col] = IdentifierTemplate[props.mode]
    return temp
    })
  }

  useEffect(() => {
    //todo mouse over points
  }, [])
  

  return (
    <div className='flex flex-col' style={{height: mazeSize[1]}}>
      {
        maze.map((row, rowI: number) => {
          return (
            <div className='flex' key={rowI} >
              <h1>{mouse[0] +  " / " +  mouse[1]}</h1>
              {row.map((identifier: number, colI: number) => (
                <MazeCell 
                  key=  {colI + " " + rowI} 
                  style={{width: mazeSize[0]/maze[0].length, height: mazeSize[1]/maze.length}} 
                  row=  {rowI}
                  col=  {colI}
                  identifier={identifier}
                  changeMaze={handleMazeChange}
                  />
        ))}
            </div>
          );
        })
      }
    </div>
  );
};


