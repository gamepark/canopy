import GameState from '../state/GameState'
import GameView, {isGameView} from '../state/GameView'
import {isPlayerView} from '../state/PlayerView'
import MoveType from './MoveType'

type PassOnPile = {
  type: MoveType.PassOnPile
}

export default PassOnPile

export const passOnPileMove: PassOnPile = {type: MoveType.PassOnPile}

export function passOnPile(state: GameState | GameView) {
  const player = state.players[state.activePlayer!]
  state.newGrowthPiles[state.currentPile! - 1] = isGameView(state) ? (isPlayerView(player) ? player.hand : player.hand.length) : player.hand
  if (isPlayerView(player)) {
    player.hand = 0
  } else {
    player.hand = []
  }
  state.currentPile!++
  const currentSeasonPileSize = isGameView(state) ? state.seasonPiles[state.season - 1] : state.seasonPiles[state.season - 1].length
  if (currentSeasonPileSize > 0) {
    state.addCardToPreviousPile = true
  }
}