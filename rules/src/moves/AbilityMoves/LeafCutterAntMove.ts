import Animal from "../../material/cards/Animal"
import { discardCard } from "../../material/cards/Card"
import PlayerState from "../../state/PlayerState"
import PlayerView from "../../state/PlayerView"
import PlayAbility, { AbilityMove } from "../PlayAbility"

export type LeafCutterAntsAbilityMove = {
    animal:Animal.LeafcutterAnts
    card:number|undefined
} 

export function isLeafCutterAntsAbilityMove(ability: AbilityMove): ability is LeafCutterAntsAbilityMove {
    return ability.animal === Animal.LeafcutterAnts
}

function leafCutterAntMove(move: PlayAbility, player: PlayerState | PlayerView) {
    if(isLeafCutterAntsAbilityMove(move.ability)){
        if (move.ability.card !== undefined) {
            discardCard(player, move.ability.card)
        }
        player.abilities[player.abilities.findIndex(a => a.animal === Animal.LeafcutterAnts)].user = true
    } else return console.error("Unexpected Move : trying to play LCA Move, but move.ability is not a LCA Move !")
}

export default leafCutterAntMove