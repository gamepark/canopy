import Animal from "../../material/cards/Animal";
import GameState from "../../state/GameState";
import PlayerState from "../../state/PlayerState";
import PlayAbility, { AbilityMove, PlayAbilityView } from "../PlayAbility";
import {lookAtNewGrowthPile} from '../../moves/LookAtNewGrowthPile';
import GameView from "../../state/GameView";
import PlayerView, { isPlayerView } from "../../state/PlayerView";
import { isToucanAbility } from "../../state/Ability";

export type ToucanAbilityMove = {
    animal:Animal.Toucan
    isUsed:boolean
    step?:1|2
    pile?:number
}

export function isToucanAbilityMove(ability:AbilityMove):ability is ToucanAbilityMove{
    return ability.animal === Animal.Toucan
}

export type ToucanAbilityMoveView = ToucanAbilityMove & {
    cards?:number[]
}

function toucanMove(state:GameState, move:PlayAbility, player:PlayerState){
    const abilityMove = move.ability
    if(isToucanAbilityMove(abilityMove)){
        if(abilityMove.isUsed === false){
            player.abilities.find(isToucanAbility)!.isTurnUsed = true

        } else {
            if(abilityMove.step === 1){
                player.hand = state.seasonPiles[abilityMove.pile!]
                state.seasonPiles[abilityMove.pile!] = []
            } else {
                state.seasonPiles[abilityMove.pile!] = player.hand
                player.hand = []
                player.abilities.find(isToucanAbility)!.user = true
                player.abilities.find(isToucanAbility)!.isTurnUsed = true
            }
        }
    } else return console.error("Unexpected Move : trying to play Toucan Move, but move.ability is not a Toucan Move !")
}

export default toucanMove

export function isToucanAbilityMoveView(move:ToucanAbilityMove|ToucanAbilityMoveView): move is ToucanAbilityMoveView{
    return (move as ToucanAbilityMoveView).cards !== undefined
}

export function toucanMoveInView(state:GameView, move:PlayAbility|PlayAbilityView, player:PlayerState|PlayerView){
    const abilityMove = move.ability
    if(isToucanAbilityMove(abilityMove)){
        if(isToucanAbilityMoveView(abilityMove)){
            if(isPlayerView(player)) return console.error("Unexpected situation : toucan move view & playerView !")
            if(abilityMove.isUsed === false){
                player.abilities.find(isToucanAbility)!.isTurnUsed = true
            } else {
                if(abilityMove.step === 1 && abilityMove.cards !== undefined){
                    player.hand = abilityMove.cards
                    state.seasonPiles[abilityMove.pile!] = 0
                } else {
                    state.seasonPiles[abilityMove.pile!] = player.hand.length
                    player.hand = []
                    player.abilities.find(isToucanAbility)!.user = true
                    player.abilities.find(isToucanAbility)!.isTurnUsed = true
                }
            }


        } else {
            if(!isPlayerView(player)) return console.error("Unexpected situation : toucan move & not playerView !")
            if(abilityMove.isUsed === false){
                player.abilities.find(isToucanAbility)!.isTurnUsed = true
            } else {
                if(abilityMove.step === 1){
                    player.hand = state.seasonPiles[abilityMove.pile!]
                    state.seasonPiles[abilityMove.pile!] = 0
                } else {
                    state.seasonPiles[abilityMove.pile!] = player.hand
                    player.hand = 0
                    player.abilities.find(isToucanAbility)!.user = true
                    player.abilities.find(isToucanAbility)!.isTurnUsed = true
                }
            }

        }
    } else return console.error("Unexpected Move : trying to play Toucan Move, but move.ability is not a Toucan Move !")
}