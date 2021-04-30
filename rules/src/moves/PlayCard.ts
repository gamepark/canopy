import cards from '../material/cards'
import CardType from '../material/cards/CardType'
import GameState from '../state/GameState'
import GameView from '../state/GameView'
import {isPlayerView} from '../state/PlayerView'
import MoveType from './MoveType'

type PlayCard = {
  type: MoveType.PlayCard
  card: number
  tree?: number
}

export default PlayCard

export function playCardMove(card: number, tree?: number): PlayCard {
  return {type: MoveType.PlayCard, card, tree}
}

export function playCard(state: GameState | GameView, move: PlayCard): void {
  const player = state.players[state.activePlayer!]
  if (isPlayerView(player)) {
    player.hand--
  } else {
    player.hand = player.hand.filter(card => card !== move.card)
  }
  delete state.currentPile // player can no longer pass on pile
  const card = cards[move.card]
  switch (card.type) {
    case CardType.Canopy:
      player.trees[move.tree!].canopy = move.card
      break
    case CardType.Trunk:
      player.trees[move.tree!].trunk.push(move.card)
      break
    case CardType.Plant:
      player.plants.push(move.card)
      break
    case CardType.Seed:
      player.seeds.push(move.card)
      break
    case CardType.Weather:
      player.weather.push(move.card)
      break
    case CardType.Threat:
      player.threats.push(move.card)
      break
    case CardType.Wildlife:
      player.wildlife.push(move.card)
      break
  }
}