import GameState from "../state/GameState"
import GameView from "../state/GameView"
import MoveType from "./MoveType"
import ThreatType from '../material/cards/ThreatType';
import { isPlayerView } from "../state/PlayerView"
import { howManyPlayerHasThreatType } from "../state/PlayerState"

type DealPlayerSeedsCards = {
    type: MoveType.DealPlayerSeedsCards
    playerId:number
}

export type DealPlayerSeedsCardsView = DealPlayerSeedsCards & {
    cards:number[]
}

export function isDealPlayerSeedsCardsView(move: DealPlayerSeedsCards | DealPlayerSeedsCardsView): move is DealPlayerSeedsCardsView {
    return typeof (move as DealPlayerSeedsCardsView).cards !== undefined
}

export default DealPlayerSeedsCards

export function dealPlayerSeedsCardsMove(playerId:number): DealPlayerSeedsCards{
    return {type: MoveType.DealPlayerSeedsCards, playerId}
}

export function dealPlayerSeedsCards(state: GameState, move: DealPlayerSeedsCards) {
  const player = state.players[move.playerId-1]
  const numberOfthreats:number = howManyPlayerHasThreatType(player,ThreatType.Fire)
  player.hand = state.seedsDeck.splice(0,3+numberOfthreats)
}

export function dealPlayerSeedsCardsInView(state: GameView, move: DealPlayerSeedsCards) {
    const player = state.players[move.playerId-1]
    const numberOfthreats:number = howManyPlayerHasThreatType(player,ThreatType.Fire)
    if(isDealPlayerSeedsCardsView(move)){
        if (isPlayerView(player)) return console.error('Unexpected situation: moveView and PlayerView')
        player.hand = move.cards
    } else {
        if (!isPlayerView(player)) return console.error('Unexpected situation: LookAtNewGrowthPile and not PlayerView')
        player.hand = 3+numberOfthreats
    }
    state.seedsDeck -= (3+numberOfthreats)
}