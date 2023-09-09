import { ScoreBar } from "./components"
import Board from "./components/Board/Board"
import './App.scss'

function App() {

  return (
    <div className="game-container">
      <ScoreBar />
      <Board />
    </div>
  )
}

export default App
