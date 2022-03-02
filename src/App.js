
import { useState } from 'react';
import './App.css';
import { Board } from './components/Board/Board';

const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]
  


const App = () => {

  const [turn, setTurn] = useState('x')
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [winningSquares, setWinningSquares] = useState([])
  const [score, setScore] = useState({
    x: 0,
    o: 0
  });

  const chekcForWinner = newSquares => {
    for(let i = 0;  i<winningPositions.length; i++){
      const [a,b,c] = winningPositions[i];
      if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]){
        //Funcion para el ganador
        endGame(newSquares[a], winningPositions[i])
        return;
      } 
    }

    if(!newSquares.includes(null)){
      //Funcion para empate
      endGame(null, Array.from(Array(10).keys()))
      return;
    }

    setTurn(turn === 'x' ? 'o' : 'x'); 

  }

  const handleClick = (square) => {
    let newSquares = [...squares];
    newSquares.splice(square,1, turn);
    setSquares(newSquares);
    chekcForWinner(newSquares);
  }

  const endGame = (ressult, winningPositions) => {
    setTurn(null);
    if(ressult !== null){
      setScore({
        ...score,
        [ressult]: score[ressult] + 1
      })
    }

    setWinningSquares(winningPositions);
  }

  return (
    <div className='container'>
      <Board winningSquares={winningSquares} turn={turn} squares={squares} onClick={handleClick}/>
    </div>
  );
}

export default App;
