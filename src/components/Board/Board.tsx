import { v4 as uuid } from 'uuid';
import symbolIcon from '../../assets/typescript_icon.png'
import { Card } from '..';
import './Board.scss'

function Board() { 
  const boardItems = [...Array(16).keys()].map(() => {
    return {
      id: uuid(),
      icon: symbolIcon
    }
  })
  console.log(boardItems)
//   [
//     {
//         id:uuid(),
//         icon : symbolIcon
//     },
//     {
//         id:uuid(),
//         icon : symbolIcon
//     },
//     {
//         id:uuid(),
//         icon : symbolIcon
//     },
//     {
//         id:uuid(),
//         icon : symbolIcon
//     },
//     {
//         id:uuid(),
//         icon : symbolIcon
//     },
//     {
//         id:uuid(),
//         icon : symbolIcon
//     },
//     {
//         id:uuid(),
//         icon : symbolIcon
//     },
//     {
//         id:uuid(),
//         icon : symbolIcon
//     },
//     {
//         id:uuid(),
//         icon : symbolIcon
//     },
//     {
//         id:uuid(),
//         icon : symbolIcon
//     },
//     {
//         id:uuid(),
//         icon : symbolIcon
//     },
//     {
//         id:uuid(),
//         icon : symbolIcon
//     },
//     {
//         id:uuid(),
//         icon : symbolIcon
//     },
//     {
//         id:uuid(),
//         icon : symbolIcon
//     },
//     {
//         id:uuid(),
//         icon : symbolIcon
//     },
//     {
//         id:uuid(),
//         icon : symbolIcon
//     }
//   ]
  return (
    <div className="board">
        {
            boardItems.map(({id, icon}) => <Card key={id} symbolIcon={icon} />)
        }
    </div>
  )
}

export default Board
