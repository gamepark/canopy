import GameState from '../state/GameState'
import GameView from '../state/GameView'
import MoveType from './MoveType'

type SetActivePlayer = {
  type: MoveType.SetActivePlayer
  player: number
}

export default SetActivePlayer

export function setActivePlayerMove(player: number): SetActivePlayer {
  return {type: MoveType.SetActivePlayer, player}
}

export function setActivePlayer(state: GameState | GameView, move: SetActivePlayer) {
  state.activePlayer = move.player
  state.currentPile = 1
}