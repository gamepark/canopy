import EndOfSeasonStep from "../state/EndOfSeasonStep"
import GameState from "../state/GameState"
import GameView from "../state/GameView"
import MoveType from "./MoveType"

type NextEndSeasonStep = {
    type: MoveType.NextEndSeasonStep
  }
  
  export default NextEndSeasonStep
  
  export function nextEndSeasonStepMove(): NextEndSeasonStep {
    return {type: MoveType.NextEndSeasonStep}
  }
  
  export function nextEndSeasonStep(state: GameState | GameView) {
      if(state.endOfSeason){
          if(state.endOfSeason === EndOfSeasonStep.Cleanup){
            delete state.activePlayer
            delete state.endOfSeason
            state.season++
          } else {
            state.endOfSeason++ 
          }
      }
  }