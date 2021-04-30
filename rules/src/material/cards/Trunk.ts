import CardType from './CardType'
import Deck from './Deck'

type Trunk = {
  deck: Deck
  type: CardType.Trunk
  value: number
}

export default Trunk

export const startingTrunk: Trunk = {deck: Deck.StartingTrunk, type: CardType.Trunk, value: 0}
export const startingTrunks = Array(4).fill(startingTrunk)