import Animal from "../../material/cards/Animal";
import GameState from "../../state/GameState";
import GameView from "../../state/GameView";
import PlayerState from "../../state/PlayerState";
import PlayerView, { isPlayerView } from "../../state/PlayerView";
import PlayAbility, { AbilityMove, PlayAbilityView } from "../PlayAbility";

export type SlothAbilityMove = {
    animal:Animal.Sloth  
}

export function isSlothAbilityMove(ability:AbilityMove):ability is SlothAbilityMove{
    return ability.animal === Animal.Sloth
}

export type SlothAbilityMoveView = SlothAbilityMove & {
    cardsId:number[]
}

function slothMove(state:GameState, move:PlayAbility, player:PlayerState){
    const abilityMove = move.ability
    const seasonPile = state.seasonPiles[state.season-1]
    if(isSlothAbilityMove(abilityMove) && seasonPile.length > 1){
        player.hand = seasonPile.splice(0,2)
    } else return console.error("Unexpected Move : trying to play Sloth Move, but move.ability is not a Sloth Move !")
}

export default slothMove

export function isSlothAbilityMoveView(move:SlothAbilityMove | SlothAbilityMoveView): move is SlothAbilityMoveView{
    return (move as SlothAbilityMoveView).cardsId !== undefined
}

export function slothMoveInView(state:GameView, move:PlayAbility |PlayAbilityView, player:PlayerState|PlayerView){
    const abilityMove = move.ability
    if(isSlothAbilityMove(abilityMove)){
        if(isSlothAbilityMoveView(abilityMove)){
            if(isPlayerView(player)) return console.error('Unexpected Situation: sloth move view & playerView !')
            player.hand = abilityMove.cardsId
            state.seasonPiles[state.season-1] -= 2
        } else {
            if(!isPlayerView(player)) return console.error('Unexpected Situation: sloth move & not playerView !')
            player.hand += 2
            state.seasonPiles[state.season-1] -= 2
        }
    } else return console.error("Unexpected Move : trying to play Sloth Move, but move.ability is not a Sloth Move !")
}