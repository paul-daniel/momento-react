import { v4 as uuid } from 'uuid';
import _ from 'lodash';
import './Board.scss'
import { angularIcon, javaIcon, nextIcon, nodejsIcon, pythonIcon, reactIcon, vueIcon, typescriptIcon } from '../../assets';
import { useEffect, useState } from 'react';
import { Card } from '..';
import state from '../../store';
import { useSnapshot } from 'valtio';

export interface CardInterface {
    id: string;
    icon: string;
    isVisible: boolean;
    isCorrect: boolean;
}

function Board() { 
  const [boardItems, setBoardItems] = useState<CardInterface[]>([]);
  const snap = useSnapshot(state)  
  const icons = [angularIcon,javaIcon,nextIcon,nodejsIcon,pythonIcon,reactIcon,vueIcon,typescriptIcon];

  const generateBoard = () => {
    const items : CardInterface[] = []

        for(let j = 0; j < 2; j++){
        for(let i =0; i < icons.length; i++){
            items.push({
                id: uuid(),
                icon: icons[i],
                isVisible: false,
                isCorrect: false
            })
        }
        }
        
    return _.shuffle(items);
  }

  useEffect(() => {
    if(!state.newGame) return;
    setBoardItems(generateBoard());
    state.newGame = false
    state.correctCards = []
    state.selectedCards = []
    state.score = 0
  }, [snap.newGame])


  return (
    <div className="board">
        {
            boardItems.map((card) => <Card key={card.id} card = {card}/>)
        }
    </div>
  )
}

export default Board
