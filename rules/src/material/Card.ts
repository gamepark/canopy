import DeckType from './DeckType'
import CardType from './CardType'
import Plant from './Plant'
import Weather from './Weather'
import Threat from './Threat'

type Card = {
  deckType: DeckType
  cardType: CardType
  plantName?: Plant
  weatherName?: Weather
  threatName?: Threat
  victoryPoints?: number | { [key in CardType]?: number | CardType }
  numberOfCopies: number
}

export default Card

