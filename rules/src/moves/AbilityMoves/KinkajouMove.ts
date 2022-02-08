import Animal from "../../material/cards/Animal"
import PlayerState from "../../state/PlayerState"
import PlayerView from "../../state/PlayerView"
import PlayAbility, { AbilityMove } from "../PlayAbility"

export type KinkajouAbilityMove = {
    animal:Animal.Kinkajou
}

export function isKinkajouAbilityMove(ability: AbilityMove): ability is KinkajouAbilityMove {
    return ability.animal === Animal.Kinkajou
}

function kinkajouMove(move: PlayAbility, player: PlayerState | PlayerView) {
    if(isKinkajouAbilityMove(move.ability)){
        player.abilities.find(a => a.animal === Animal.Kinkajou)!.user = true
    } else return console.error("Unexpected Move : trying to play Kinkajou Move, but move.ability is not a Kinkajou Move !")

}

export default kinkajouMove