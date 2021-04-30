import GameState from '../state/GameState'
import GameView from '../state/GameView'
import {isPlayerView} from '../state/PlayerView'
import MoveType from './MoveType'

type LookAtNewGrowthPile = {
  type: MoveType.LookAtNewGrowthPile
}

export default LookAtNewGrowthPile

export const lookAtNewGrowthPileMove: LookAtNewGrowthPile = {type: MoveType.LookAtNewGrowthPile}

export function lookAtNewGrowthPile(state: GameState) {
  const player = state.players[state.activePlayer!]
  player.hand = state.newGrowthPiles[state.currentPile! - 1]
  state.newGrowthPiles[state.currentPile! - 1] = []
}

/**
 * On the frontend side, the player that looks need to know what it is. For him, we need a "move view" that includes the id of the cards discovered
 */
export type LookAtNewGrowthPileView = LookAtNewGrowthPile & {
  cards: number[]
}

export function lookAtNewGrowthPileMoveView(state: GameState, move: LookAtNewGrowthPile): LookAtNewGrowthPileView {
  const player = state.players[state.activePlayer!]
  return {...move, cards: player.hand}
}

export function isLookAtNewGrowthPileView(move: LookAtNewGrowthPile | LookAtNewGrowthPileView): move is LookAtNewGrowthPileView {
  return (move as LookAtNewGrowthPileView).cards !== undefined
}

export function lookAtNewGrowthPileInView(state: GameView, move: LookAtNewGrowthPile | LookAtNewGrowthPileView) {
  const player = state.players[state.activePlayer!]
  if (isLookAtNewGrowthPileView(move)) {
    if (isPlayerView(player)) return console.error('Unexpected situation: LookAtNewGrowthPileView and PlayerView')
    player.hand = move.cards
  } else {
    if (!isPlayerView(player)) return console.error('Unexpected situation: LookAtNewGrowthPile and not PlayerView')
    player.hand = state.newGrowthPiles[state.currentPile! - 1]
  }
  state.newGrowthPiles[state.currentPile! - 1] = 0
}