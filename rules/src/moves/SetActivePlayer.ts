import { isPDFAbility, isToucanAbility } from '../state/Ability'
import GameState from '../state/GameState'
import GameView from '../state/GameView'
import PlayerState from '../state/PlayerState'
import PlayerView from '../state/PlayerView'
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
  state.activePlayer !== undefined && cleanTempAbilities(state.players[state.activePlayer-1])
  state.activePlayer = move.player
  state.currentPile = 1
}

// Due to special comportement of Toucan & Poison Dart Frog skills, we need to clean the special props,
// so the player can decide again to use it for next turn
function cleanTempAbilities(player:PlayerState|PlayerView){
  delete player.abilities.find(isToucanAbility)?.isTurnUsed
  delete player.abilities.find(isPDFAbility)?.isTurnUsed
}