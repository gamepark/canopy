import Animal from './Animal'
import CardType from './CardType'
import Deck from './Deck'
import WildlifeType from './WildlifeType'

type Wildlife = {
  deck: Deck.Rainforest
  type: CardType.Wildlife
  animal: Animal
  wildlifeType: WildlifeType
  advanced?: boolean
}

export default Wildlife