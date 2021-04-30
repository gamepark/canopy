import GameState from '../state/GameState'
import MoveType from './MoveType'

type PassOnPile = {
  type: MoveType.PassOnPile
}

export default PassOnPile

export const passOnPileMove: PassOnPile = {type: MoveType.PassOnPile}

export function passOnPile(state: GameState) {
  const player = state.players[state.activePlayer!]
  state.newGrowthPiles[state.currentPile! - 1] = player.hand
  player.hand = []
  state.currentPile!++
  if (state.seasonPiles[state.season - 1].length > 0) {
    state.addCardToPreviousPile = true
  }
}