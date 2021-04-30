import GameState from '../state/GameState'
import GameView from '../state/GameView'
import MoveType from './MoveType'

type DealCard = {
  type: MoveType.DealCard
  pile: number
}

export default DealCard

export function dealCardMove(pile: number): DealCard {
  return {type: MoveType.DealCard, pile}
}

export function dealCard(state: GameState, pile: number) {
  const card = state.seasonPiles[state.season - 1].pop()
  if (card === undefined) return console.error('You cannot deal a card when current season deck is empty')
  state.newGrowthPiles[pile - 1].push(card)
  delete state.addCardToPreviousPile
}

export function dealCardInView(state: GameView, pile: number) {
  state.seasonPiles[state.season - 1]--
  state.newGrowthPiles[pile - 1]++
  delete state.addCardToPreviousPile
}