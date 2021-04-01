import DeckType from './DeckType'
import CardType from './CardType'
//import Plant from './Plant'
//import Weather from './Weather'
//import Threat from './Threat'
import WildlifeType from './WildlifeType'
//import WildlifeName from './WildlifeName'

type Card = {
  deckType: DeckType
  cardType: CardType
  //plantName?: Plant
  //weatherName?: Weather
  //threatName?: Threat
  wildlifeType?: WildlifeType
  //wildlifeName?: WildlifeName
  //wildlifeEffect?: 
  victoryPoints?: number | { [key in CardType]?: number | CardType }
  numberOfCopies: number
}

export default Card

