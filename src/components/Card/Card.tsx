import { useState } from 'react'

import './Card.scss'
import hiddenIcon from '../../assets/hidden_icon.png'

interface Props {
  symbolIcon : string
}

function Card({symbolIcon} : Props) {
  const [isRotated, setIsRotated] = useState(false)
  return (
    <div className='flip__card' onClick={() => setIsRotated(prev => !prev)}>
      <div className={`card__side hidden__side ${isRotated ? 'hidden__rotate' : null}`}>
        <img className="card__side__icon" src={hiddenIcon} alt="hidden icon" />
      </div>
      <div className={`card__side symbol__side ${isRotated ? 'symbol__rotate' : null}`}>
        <img className="card__side__icon" src={symbolIcon} alt="hidden icon" />
      </div>
    </div>
  )
}

export default Card