import React, {useState} from 'react'
import Square from './Square'

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn , setIsXTurn] = useState(true); 
  let ans = false; 
  let winner = () =>{
    const possible = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    console.log(state);
    possible.forEach((logic) => {
      const [a,b,c] = logic;
      console.log(logic)  
      console.log(state[a])  
      console.log(state[b])  
      console.log(state[c])  
      if(state[a] !== null && state[a] === state[b] && state[b] === state[c]){
        console.log("i am the winner ")
        ans = state[a];
      } 
    });
    return ans; 
  }
  let  isWinner = winner() ;
  // console.log(isWinner);
  const handleClick = (index) => {
    if(state[index] !== null){
      return ;
    }
    const copyState = [...state]; 
    copyState[index] = isXturn ? "X" : "0" ;
    setState(copyState);
    setIsXTurn(!isXturn);
  };
  
  const resetgame = () =>{
    setState(Array(9).fill(null));
  }
  return (
    <div className='board-container'>{
      isWinner ? (<> { isWinner } won the match <br />
      <br />
      <button onClick={resetgame}>play again </button>
      </>) : (
       <>
       <h1>
        player {isXturn ? "X" : "0"} please move
       </h1>
       <div className='board-raw'>
          <Square onClick = {() => handleClick(0) } value={state[0]}/>
          <Square onClick = {() => handleClick(1) }  value={state[1]}/>
          <Square onClick = {() => handleClick(2) } value={state[2]}/>
        </div>
        <div className='board-raw'>
        <Square onClick = {() => handleClick(3) } value={state[3]}/>
          <Square onClick = {() => handleClick(4) } value={state[4]}/>
          <Square onClick = {() => handleClick(5) }value={state[5]}/>
        </div>
        <div className='board-raw'>
          <Square onClick = {() => handleClick(6) } value={state[6]}/>
          <Square onClick = {() => handleClick(7) } value={state[7]}/>
          <Square onClick = {() => handleClick(8) } value={state[8]}/>
        </div>
       </> 
      )} 
    </div>
  )
}

export default Board