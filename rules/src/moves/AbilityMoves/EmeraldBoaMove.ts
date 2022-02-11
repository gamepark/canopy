import cards from "../../material/cards";
import Animal from "../../material/cards/Animal";
import CardType from "../../material/cards/CardType";
import WildlifeType from "../../material/cards/WildlifeType";
import GameState from "../../state/GameState";
import GameView, { isGameView } from "../../state/GameView";
import PlayerState from "../../state/PlayerState";
import PlayerView, { isPlayerView } from "../../state/PlayerView";
import PlayAbility, { AbilityMove } from "../PlayAbility";
import {passOnPile} from '../../moves/PassOnPile';
import Move from "../Move";
import MoveType from "../MoveType";

export type EmeraldBoaAbilityMove = {
    animal:Animal.EmeraldBoa
    cardId:number
    tree?:number
}

export function isEmeraldBoaMove(ability:AbilityMove): ability is EmeraldBoaAbilityMove{
    return ability.animal === Animal.EmeraldBoa
}

function emeraldBoaMove(state:GameState|GameView, move:PlayAbility, player:PlayerState | PlayerView){
    const abilityMove = move.ability
    if(isEmeraldBoaMove(abilityMove)){
        if(isPlayerView(player)){
            player.hand--
        } else {
            player.hand.splice(player.hand.findIndex(c => c === abilityMove.cardId),1)
        }

        const card = cards[abilityMove.cardId]
        switch (card.type) {
          case CardType.Canopy:
            player.trees[abilityMove.tree!].canopy = abilityMove.cardId
            break
          case CardType.Trunk:
            abilityMove.tree ? player.trees[abilityMove.tree!].trunk.push(abilityMove.cardId) : player.trees.push({trunk:[abilityMove.cardId]})
            break
          case CardType.Plant:
            player.plants.push(abilityMove.cardId)
            break
          case CardType.Seed:
            player.seeds.push(abilityMove.cardId)
            break
          case CardType.Weather:
            player.weather.push(abilityMove.cardId)
            break
          case CardType.Threat:
            player.threats.push(abilityMove.cardId)
            break
          case CardType.Wildlife:
            player.wildlife.push(abilityMove.cardId)
            card.wildlifeType === WildlifeType.Active && player.abilities.push({animal:card.animal})
            break
        }

        passOnPile(state)
        player.abilities.find(a => a.animal === Animal.EmeraldBoa)!.user = true
   
    } else return console.error("Unexpected Move : trying to play Boa Move, but move.ability is not a Boa Move !")
}

export default emeraldBoaMove

export function getBoaLegalMoves(player:PlayerState, playerId:number): Move[]{
    const result:Move[] = []
    
    player.hand.forEach(c => {
        const card = cards[c]
        switch (card.type) {
            case CardType.Trunk:
              player.trees.forEach((tree, treeId) => {
                if (tree.canopy === undefined) {
                  result.push({ type: MoveType.PlayAbility, ability: { animal: Animal.EmeraldBoa, cardId: c, tree:treeId }, playerId }) 
                }
              })
              result.push({ type: MoveType.PlayAbility, ability: { animal: Animal.EmeraldBoa, cardId: c}, playerId }) 
              break
            case CardType.Canopy:
              player.trees.forEach((tree, treeId) => {
                if (tree.canopy === undefined) {
                    result.push({ type: MoveType.PlayAbility, ability: { animal: Animal.EmeraldBoa, cardId: c, tree:treeId }, playerId }) 
                }
              })
              break
            default:
                result.push({ type: MoveType.PlayAbility, ability: { animal: Animal.EmeraldBoa, cardId: c}, playerId }) 
          }
    })
    return result

}