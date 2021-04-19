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
  advancedCard: boolean
  //shiftingSeasonEffect?:
  //plantName?: Plant
  //weatherName?: Weather
  //threatName?: Threat
  wildlifeType?: WildlifeType
  //wildlifeName?: WildlifeName
  //wildlifeEffect?: 
  endOfSeasonVictoryPoints?: number | { [key in CardType]?: number | CardType }
  endOfGameVictoryPoints?: number | { [key in CardType]?: number | CardType }
  numberOfCopies: number
}

export default Card

