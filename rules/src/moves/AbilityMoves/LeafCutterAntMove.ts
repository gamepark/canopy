import Animal from "../../material/cards/Animal"
import { discardCard } from "../../material/cards/Card"
import PlayerState from "../../state/PlayerState"
import PlayerView from "../../state/PlayerView"
import Move from "../Move"
import MoveType from "../MoveType"
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

export function getLegalLCAMoves(player: PlayerState|PlayerView, playerId: number): Move[] {
    const result:Move[] = []
    player.plants.forEach(plant => {
        result.push({ type: MoveType.PlayAbility, ability: { animal: Animal.LeafcutterAnts, card: plant }, playerId })
    })
    player.seeds.forEach(seed => {
        result.push({ type: MoveType.PlayAbility, ability: { animal: Animal.LeafcutterAnts, card: seed }, playerId })
    })
    player.threats.forEach(threat => {
        result.push({ type: MoveType.PlayAbility, ability: { animal: Animal.LeafcutterAnts, card: threat }, playerId })
    })
    player.weather.forEach(w => {
        result.push({ type: MoveType.PlayAbility, ability: { animal: Animal.LeafcutterAnts, card: w }, playerId })
    })
    player.wildlife.forEach(animal => {
        result.push({ type: MoveType.PlayAbility, ability: { animal: Animal.LeafcutterAnts, card: animal }, playerId })
    })
    player.trees.forEach(tree => {
      if (tree.score === undefined) {
        tree.trunk.forEach(t => {
            result.push({ type: MoveType.PlayAbility, ability: { animal: Animal.LeafcutterAnts, card: t }, playerId })
        })
        tree.canopy && result.push({ type: MoveType.PlayAbility, ability: { animal: Animal.LeafcutterAnts, card: tree.canopy }, playerId })
      }
    })
    return result
  }