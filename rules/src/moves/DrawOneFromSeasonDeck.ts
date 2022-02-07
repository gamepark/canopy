import GameState from "../state/GameState"
import GameView from "../state/GameView"
import { isPlayerView } from "../state/PlayerView"
import MoveType from "./MoveType"

type DrawOneFromSeasonDeck = {
  type: MoveType.DrawOneFromSeasonDeck
}

export default DrawOneFromSeasonDeck

export const drawOneFromSeasonDeckMove: DrawOneFromSeasonDeck = {type: MoveType.DrawOneFromSeasonDeck}

export function drawOneFromSeasonDeck(state: GameState) {
  const player = state.players[state.activePlayer!]
  const card:number = state.seasonPiles[state.season-1].pop()!
  player.hand.push(card)
}

/**
 * On the frontend side, the player that looks need to know what it is. For him, we need a "move view" that includes the id of the cards discovered
 */
export type DrawOneFromSeasonDeckView = DrawOneFromSeasonDeck & {
  cards: number[]
}

export function drawOneFromSeasonDeckMoveView(state: GameState, move: DrawOneFromSeasonDeck): DrawOneFromSeasonDeckView {
  const player = state.players[state.activePlayer!]
  return {...move, cards: player.hand}
}

export function isDrawOneFromSeasonDeckView(move: DrawOneFromSeasonDeck | DrawOneFromSeasonDeckView): move is DrawOneFromSeasonDeckView {
  return typeof (move as DrawOneFromSeasonDeckView).cards !== undefined
}

export function drawOneFromSeasonDeckInView(state: GameView, move: DrawOneFromSeasonDeck | DrawOneFromSeasonDeckView) {
  const player = state.players[state.activePlayer!]
  if (isDrawOneFromSeasonDeckView(move)) {
    if (isPlayerView(player)) return console.error('Unexpected situation: LookAtNewGrowthPileView and PlayerView')
    player.hand = move.cards
  } else {
    if (!isPlayerView(player)) return console.error('Unexpected situation: LookAtNewGrowthPile and not PlayerView')
    player.hand = 1
  }
  state.seasonPiles[state.season-1]--
}