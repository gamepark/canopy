import Animal from "../material/cards/Animal"
import GameState from "../state/GameState"
import GameView from "../state/GameView"
import PlayerState from "../state/PlayerState"
import PlayerView from "../state/PlayerView"
import emeraldBoaMove, { EmeraldBoaAbilityMove, isEmeraldBoaMove } from "./AbilityMoves/EmeraldBoaMove"
import harmoniaMantleMove, { HarmoniaMantleAbilityMove, isHarmoniaMantleMove } from "./AbilityMoves/HarmoniaMantleMove"
import howlerMonkeyMove, { HowlerMonkeyAbilityMove, isHowlerMonkeyMove } from "./AbilityMoves/HowlerMonkeyMove"
import jaguarMove, { isJaguarAbilityMove, JaguarAbilityMove } from "./AbilityMoves/JaguarMove"
import { KinkajouAbilityMove } from "./AbilityMoves/KinkajouMove"
import leafCutterAntMove, { isLeafCutterAntsAbilityMove, LeafCutterAntsAbilityMove } from "./AbilityMoves/LeafCutterAntMove"
import poisonDartFrogMove, { isPoisonDartFrogAbilityMove, PoisonDartFrogAbilityMove } from "./AbilityMoves/PoisonDartFrog"
import slothMove, { isSlothAbilityMove, SlothAbilityMove, SlothAbilityMoveView, slothMoveInView } from "./AbilityMoves/SlothMove"
import toucanMove, { isToucanAbilityMove, ToucanAbilityMove, ToucanAbilityMoveView, toucanMoveInView } from "./AbilityMoves/ToucanMove"
import MoveType from "./MoveType"

type PlayAbility = {
    type: MoveType.PlayAbility
    playerId:number
    ability: AbilityMove
}

export default PlayAbility

export function isNoViewAnimal(animal:Animal):boolean{
    return animal === Animal.LeafcutterAnts || animal === Animal.HarmoniaMantle || animal === Animal.Jaguar || animal === Animal.Kinkajou || animal === Animal.HowlerMonkey || animal === Animal.PoisonDartFrog || animal === Animal.EmeraldBoa
}

export type PlayAbilityView = {
    type:MoveType.PlayAbility
    playerId:number
    ability:AbilityMoveView
}

export type AbilityMove = LeafCutterAntsAbilityMove | HarmoniaMantleAbilityMove | JaguarAbilityMove | KinkajouAbilityMove | HowlerMonkeyAbilityMove | PoisonDartFrogAbilityMove 
                        | EmeraldBoaAbilityMove | SlothAbilityMove | ToucanAbilityMove

export type AbilityMoveView = AbilityMove | (SlothAbilityMoveView | ToucanAbilityMoveView)

export function playAbilityMove(playerId:number, ability:AbilityMove):PlayAbility{
    return {type:MoveType.PlayAbility, playerId, ability}
}
  
export function playAbility(state: GameState, move:PlayAbility) {
    const player:PlayerState|PlayerView = state.players[move.playerId-1]
    if(isLeafCutterAntsAbilityMove(move.ability)){
        leafCutterAntMove(move, player)
    } else if (isHarmoniaMantleMove(move.ability)){
        harmoniaMantleMove(move, player)
    } else if (isJaguarAbilityMove(move.ability)){
        jaguarMove(state, move, player)
    } else if (isHowlerMonkeyMove(move.ability)){
        howlerMonkeyMove(state, move, player)
    } else if (isPoisonDartFrogAbilityMove(move.ability)){
        poisonDartFrogMove(state, move, player)
    } else if (isEmeraldBoaMove(move.ability)){
        emeraldBoaMove(state, move, player)
    } else if (isSlothAbilityMove(move.ability)){
        slothMove(state, move, player)
    } else if(isToucanAbilityMove(move.ability)){
        toucanMove(state, move, player)
    }
}

export function playAbilityInView(state: GameView, move:PlayAbility|PlayAbilityView){
    const player:PlayerState|PlayerView = state.players[move.playerId-1]
    if(isLeafCutterAntsAbilityMove(move.ability)){
        leafCutterAntMove(move, player)
    } else if (isHarmoniaMantleMove(move.ability)){
        harmoniaMantleMove(move, player)
    } else if (isJaguarAbilityMove(move.ability)){
        jaguarMove(state, move, player)
    } else if (isHowlerMonkeyMove(move.ability)){
        howlerMonkeyMove(state, move, player)
    } else if (isPoisonDartFrogAbilityMove(move.ability)){
        poisonDartFrogMove(state, move, player)
    } else if (isEmeraldBoaMove(move.ability)){
        emeraldBoaMove(state, move, player)
    } else if (isSlothAbilityMove(move.ability)){
        slothMoveInView(state, move, player)
    } else if(isToucanAbilityMove(move.ability)){
        toucanMoveInView(state, move, player)
    }
}

