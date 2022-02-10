import cards from "../../material/cards"
import Animal from "../../material/cards/Animal"
import { discardCard } from "../../material/cards/Card"
import CardType from "../../material/cards/CardType"
import PlantSpecies from "../../material/cards/PlantSpecies"
import PlayerState from "../../state/PlayerState"
import PlayerView from "../../state/PlayerView"
import PlayAbility, { AbilityMove } from "../PlayAbility"

export type HarmoniaMantleAbilityMove = {
    animal:Animal.HarmoniaMantle
    plant:PlantSpecies.Monstera | PlantSpecies.Fern | PlantSpecies.Bromelia | undefined
} 

export function isHarmoniaMantleMove(ability: AbilityMove): ability is HarmoniaMantleAbilityMove {
    return ability.animal === Animal.HarmoniaMantle
}

function harmoniaMantleMove(move: PlayAbility, player: PlayerState | PlayerView) {
    if(isHarmoniaMantleMove(move.ability)){
        if (move.ability.plant !== undefined) {
            // TODO: add Plant Card - Check Trello Q#1 for more infos
            discardCard(player, cards.findIndex((c, index) => c.type === CardType.Wildlife && c.animal === Animal.HarmoniaMantle && player.wildlife.some(w => w === index)))
        } else {
            player.abilities.find(a => a.animal === Animal.HarmoniaMantle)!.user = true
        }
    } else return console.error("Unexpected Move : trying to play Harmonia Mantle Move, but move.ability is not a HM Move !")

}

export default harmoniaMantleMove