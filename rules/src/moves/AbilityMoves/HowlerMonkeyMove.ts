import Animal from "../../material/cards/Animal";
import GameState from "../../state/GameState";
import GameView, { isGameView } from "../../state/GameView";
import PlayerState from "../../state/PlayerState";
import PlayerView, { isPlayerView } from "../../state/PlayerView";
import PlayAbility, { AbilityMove } from "../PlayAbility";

export type HowlerMonkeyAbilityMove = {
    animal:Animal.HowlerMonkey
}

export function isHowlerMonkeyMove(ability:AbilityMove):ability is HowlerMonkeyAbilityMove{
    return ability.animal === Animal.HowlerMonkey
}

function howlerMonkeyMove(state:GameState|GameView, move:PlayAbility, player:PlayerState|PlayerView){
    if(isHowlerMonkeyMove(move.ability)){
        if(isPlayerView(player)){
            player.hand = 0
        } else {
            player.hand = []
        }
        player.abilities.find(a => a.animal === Animal.HowlerMonkey)!.user = true
        state.currentPile!++
        const currentSeasonPileSize = isGameView(state) ? state.seasonPiles[state.season - 1] : state.seasonPiles[state.season - 1].length
        if (currentSeasonPileSize > 0) {
          state.addCardToPreviousPile = true
        }
    } else return console.error("Unexpected Move : trying to play Howler Monkey Move, but move.ability is not a HM Move !")

}

export default howlerMonkeyMove