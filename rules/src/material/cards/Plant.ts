import CardType from './CardType'
import Deck from './Deck'
import PlantSpecies from './PlantSpecies'

type Plant = {
  deck: Deck
  type: CardType.Plant
  species: PlantSpecies
  advanced?: boolean
}

export default Plant