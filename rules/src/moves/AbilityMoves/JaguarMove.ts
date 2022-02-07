import Animal from "../../material/cards/Animal"
import { discardCard } from "../../material/cards/Card"
import GameState from "../../state/GameState"
import GameView from "../../state/GameView"
import PlayerState from "../../state/PlayerState"
import PlayerView from "../../state/PlayerView"
import PlayAbility, { AbilityMove } from "../PlayAbility"

export type JaguarAbilityMove = {
    animal:Animal.Jaguar
    prey:number
}

export function isJaguarAbilityMove(ability: AbilityMove): ability is JaguarAbilityMove {
    return ability.animal === Animal.Jaguar
}

function jaguarMove(state: GameState | GameView, move: PlayAbility, player: PlayerState | PlayerView) {
    if(isJaguarAbilityMove(move.ability)){
        const opponent: PlayerState | PlayerView = state.players.find((_, i) => i !== move.playerId)!
        discardCard(opponent, move.ability.prey)
        player.abilities.find(a => a.animal === Animal.Jaguar)!.user = true
    } else return console.error("Unexpected Move : trying to play Jaguar Move, but move.ability is not a jaguar Move !")

}

export default jaguarMove