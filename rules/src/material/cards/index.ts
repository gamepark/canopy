import advancedRainforestCards from './advancedRainforestCards'
import Card from './Card'
import seedCards from './seedCards'
import standardRainforestCards from './standardRainforestCards'
import {startingTrunks} from './Trunk'

const cards: Card[] = [
  ...startingTrunks,
  ...standardRainforestCards,
  ...seedCards,
  ...advancedRainforestCards
]

export default cards

export function getCardIds(predicate: (card: Card) => boolean):number[] {
  const result: number[] = []
  cards.forEach((card, id) => {
    if (predicate(card)) {
      result.push(id)
    }
  })
  return result
}

export function getFirstCardId(predicate:(card:Card) => boolean):number{
  return cards.findIndex(predicate)
}