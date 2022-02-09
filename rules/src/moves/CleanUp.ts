import GameState from "../state/GameState";
import GameView from "../state/GameView";
import MoveType from "./MoveType";
import { nextEndSeasonStep } from "./NextEndSeasonStep";

type CleanUp = {
    type:MoveType.CleanUp
}

export default CleanUp

export const cleanUpMove:CleanUp = {type:MoveType.CleanUp}

export function cleanUp(state:GameState|GameView){
    state.players.forEach(p => {
        p.abilities.forEach(a => a.user = false)
        p.hand = []
        p.plants = []
        p.seeds = []
        p.tempDiscard = []
        p.threats = []
        p.weather = []
    })
    delete state.activePlayer
    nextEndSeasonStep(state)

}