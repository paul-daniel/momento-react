import './ScoreBar.scss'
import state from '../../store'
import { useSnapshot } from 'valtio'

function ScoreBar() {
  const snap = useSnapshot(state)

  const newGame = () => {
    state.newGame = true
  }
  return (
    <div className='scoreBar'>
      <p className='scoreBar__wins'>SCORE: {snap.score}</p>
      <h1 className='scoreBar__title'>Memory Game</h1>
      <button className='scoreBar__new' onClick={newGame}>New Game</button>
    </div>
  )
}

export default ScoreBar