import Animal from "../../material/cards/Animal";
import { isPDFAbility } from "../../state/Ability";
import GameState from "../../state/GameState";
import GameView, { isGameView } from "../../state/GameView";
import PlayerState from "../../state/PlayerState";
import PlayerView from "../../state/PlayerView";
import PlayAbility, { AbilityMove } from "../PlayAbility";

export type PoisonDartFrogAbilityMove = {
    animal:Animal.PoisonDartFrog
    isUse:boolean
}

export function isPoisonDartFrogAbilityMove(ability:AbilityMove):ability is PoisonDartFrogAbilityMove{
    return ability.animal === Animal.PoisonDartFrog
}

function poisonDartFrogMove(state:GameState|GameView, move:PlayAbility, player:PlayerState|PlayerView){
    if(isPoisonDartFrogAbilityMove(move.ability)){
        if(move.ability.isUse === true){
            if(isGameView(state)){
                state.newGrowthPiles.forEach(pile => pile++)
            } else {
                state.newGrowthPiles.forEach(pile => {
                    const seasonPile = state.seasonPiles[state.season-1]
                    seasonPile.length > 0 && pile.push(seasonPile.pop()!)
                })
            }
            player.abilities.find(a => a.animal === Animal.PoisonDartFrog)!.user = true
        }
        player.abilities.find(isPDFAbility)!.isTurnUsed = true

    } else return console.error("Unexpected Move : trying to play PDF Move, but move.ability is not a PDF Move !")
}

export default poisonDartFrogMove