import { useEffect, useState } from 'react'
import { CardInterface } from '../Board/Board'

import './Card.scss'
import hiddenIcon from '../../assets/hidden_icon.png'
import state from '../../store'
import { useSnapshot } from 'valtio'

interface Props {
  card: CardInterface,
}

function Card({ card, } : Props) {
  const snap = useSnapshot(state)
  const [currentCard, setCurrentCard] = useState(card)
  const handleClick = () => {
    if(snap.correctCards.includes(currentCard)) return

    setCurrentCard(prev => ({...prev, isVisible : true}))
    if(!snap.selectedCards.includes(currentCard)){
      state.selectedCards.push(currentCard)
    }
  }
  const reset = () => {
    setCurrentCard(prev => ({...prev, isVisible : false}))
  }

  useEffect(() => {
    setTimeout(() => {
      if(snap.selectedCards.length === 2){
        if(snap.selectedCards[0].icon === snap.selectedCards[1].icon){
          state.correctCards.push(...state.selectedCards)
          if(snap.selectedCards[0]?.id === currentCard.id){
            state.score+=2
          }
          state.selectedCards = []
        }else{
          if(snap.selectedCards[0]?.id === currentCard.id){
            state.score = (state.score -1) < 0 ? 0 : state.score -1
          }
          if(snap.selectedCards[0]?.icon === currentCard.icon){
            reset()
          }
          if(snap.selectedCards[1]?.icon === currentCard.icon){
            reset()
          }

          state.selectedCards = []
        }
      }
    }, 1000)
    
  }, [snap.selectedCards])

  return (
    <div className='flip__card' onClick={handleClick}>
      <div className={`card__side hidden__side ${currentCard.isVisible ? 'hidden__rotate' : null} ${currentCard.isCorrect && 'perma__rotate'}`}>
        <img className="card__side__icon" src={hiddenIcon} alt="hidden icon" />
      </div>
      <div className={`card__side symbol__side ${currentCard.isVisible ? 'symbol__rotate' : null} ${currentCard.isCorrect && 'perma__rotate'}`}>
        <img className="card__side__icon" src={currentCard.icon} alt="hidden icon" />
      </div>
    </div>
  )
}

export default Card