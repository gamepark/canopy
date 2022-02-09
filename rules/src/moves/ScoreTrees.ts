import GameState from "../state/GameState"
import GameView from "../state/GameView"
import { scoreCanopy, scoreTrunk } from "../state/Tree"
import MoveType from "./MoveType"
import { nextEndSeasonStep } from "./NextEndSeasonStep"

type ScoreTrees = {
    type:MoveType.ScoreTrees
}

export default ScoreTrees

export const scoreTreesMove:ScoreTrees = {type:MoveType.ScoreTrees}

export function scoreTrees(state:GameState|GameView){
    state.players.forEach(p => {
        p.trees.filter(t => t.score !== true && t.canopy !== undefined).forEach(t => {
            p.score += scoreTrunk(t)
            p.score += scoreCanopy(t)
            t.score = true
        })
    })
    const higherTree = Math.max(...state.players.map(p => Math.max(...p.trees.filter(t => t.reward === undefined && t.canopy !== undefined).map(t => t.trunk.length))))
    state.players.forEach(p => {
        for(const tree of p.trees){
            if(tree.trunk.length === higherTree){
                tree.reward = 2+state.season
                p.score += 2+state.season
                break
            }
        }
    })
    nextEndSeasonStep(state)
}