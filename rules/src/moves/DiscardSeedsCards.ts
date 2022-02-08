import GameState from "../state/GameState";
import GameView from "../state/GameView";
import MoveType from "./MoveType";

type DiscardSeedsCards = {
    type:MoveType.DiscardSeedsCards
    playerId:number
}

export default DiscardSeedsCards

export function discardSeedsCardsMove(playerId:number):DiscardSeedsCards{
    return {type:MoveType.DiscardSeedsCards, playerId}
}

export function discardSeedsCards(state:GameState | GameView, move:DiscardSeedsCards){
    const player = state.players[move.playerId-1]
    player.hand = []
    player.seeds = []
}