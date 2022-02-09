import cards from '.'
import CardType from './CardType'
import Deck from './Deck'
import PlantSpecies, { scoreBromelias, scoreCoinCapFungi, scoreFerns, scoreLianas, scoreMonsteras, scoreOrchids } from './PlantSpecies'

type Plant = {
  deck: Deck
  type: CardType.Plant
  species: PlantSpecies
  advanced?: boolean
}

export default Plant

export function scorePlants(plants:number[], canopyCount:number):number{
  const monsteras = scoreMonsteras(plants.filter(p => {const card = cards[p]; return card.type === CardType.Plant && card.species === PlantSpecies.Monstera}).length)
  const ferns = scoreFerns(plants.filter(p => {const card = cards[p]; return card.type === CardType.Plant && card.species === PlantSpecies.Fern}).length)
  const bromelias = scoreBromelias(plants.filter(p => {const card = cards[p]; return card.type === CardType.Plant && card.species === PlantSpecies.Bromelia}).length)
  const lianas = scoreLianas(plants.filter(p => {const card = cards[p]; return card.type === CardType.Plant && card.species === PlantSpecies.Lianas}).length, canopyCount)
  const orchids = scoreOrchids(plants.filter(p => {const card = cards[p]; return card.type === CardType.Plant && card.species === PlantSpecies.Orchid}).length)
  const coinCapFungi = scoreCoinCapFungi(plants.filter(p => {const card = cards[p]; return card.type === CardType.Plant && card.species === PlantSpecies.CoincapFungi}).length)

  return (monsteras + ferns + bromelias + lianas + orchids + coinCapFungi)

}