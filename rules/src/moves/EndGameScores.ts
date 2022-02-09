import { scoreAnimals } from '../material/cards/Animal';
import GameState from "../state/GameState";
import GameView from "../state/GameView";
import MoveType from "./MoveType";

type EndGameScores = {
    type:MoveType.EndGameScores
}

export default EndGameScores

export const endGameScoresMove:EndGameScores = {type:MoveType.EndGameScores}

export function endGameScores(state:GameState|GameView){
    const luxuriousBonusCap:number = Math.max(...state.players.map(p => p.trees.length))
    state.players.forEach(p => {
        p.score += scoreAnimals(p.wildlife, p.trees)
        p.score += p.trees.length === luxuriousBonusCap ? 10 : 0
    })
    state.season++
}