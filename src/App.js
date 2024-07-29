import { useState } from 'react';
import './App.css';

function App() {
  let [squares,setSquares] = useState(Array(9).fill(null));
  let [nextTurn,setNextTurn] = useState(true);

  let winner = calculateWinner(squares);
  let status = winner ? `Winner is - ${winner}` : `${nextTurn ? 'Turn - X':'Turn - O'}`;

  let handleClick = (index)=>{
    if(squares[index] !== null || winner) return;
    let newSquares = squares.slice();
    newSquares[index] = nextTurn ? 'X' : 'O';
    setSquares(newSquares);
    setNextTurn(!nextTurn);
  }

  let handleReset = ()=>{
    setSquares(Array(9).fill(null));
    setNextTurn(true);
  }
  return (
    <div className='box'>
      <div className='title'>Tic-Tac-Toe</div>
      <div className='status'>{status}</div>
      <div className='board'>
        {
          squares.map((value,index)=>{
            return <button onClick={()=>handleClick(index)}>{value}</button>
          })
        }
      </div>
      <button className='reset' onClick={handleReset}>Reset</button>
    </div>
  );
}

let calculateWinner = (squares)=>{
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
  ];

  for(let [a,b,c] of lines){
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

export default App;
