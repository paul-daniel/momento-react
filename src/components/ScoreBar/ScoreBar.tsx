import {useState} from 'react'

import './ScoreBar.scss'

function ScoreBar() {
  const [score, setScore] = useState(0)

  return (
    <div className='scoreBar'>
      <p className='scoreBar__wins'>{score} wins</p>
      <h1 className='scoreBar__title'>Memory Game</h1>
      <button className='scoreBar__new'>New Game</button>
    </div>
  )
}

export default ScoreBar