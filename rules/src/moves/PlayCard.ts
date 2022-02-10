import cards from '../material/cards'
import Animal from '../material/cards/Animal'
import CardType from '../material/cards/CardType'
import WildlifeType from '../material/cards/WildlifeType'
import EndOfSeasonStep from '../state/EndOfSeasonStep'
import GameState from '../state/GameState'
import GameView from '../state/GameView'
import {isPlayerView} from '../state/PlayerView'
import kinkajouMove, {KinkajouAbilityMove} from './AbilityMoves/KinkajouMove'
import MoveType from './MoveType'

type PlayCard = {
  type: MoveType.PlayCard
  card: number
  tree?: number
  playerId?:number
}

export default PlayCard

export function playCardMove(card: number, tree?: number, playerId?:number): PlayCard {
  return {type: MoveType.PlayCard, card, tree, playerId}
}

export function playCard(state: GameState | GameView, move: PlayCard): void {
  const player = move.playerId ? state.players[move.playerId-1] : state.players[state.activePlayer!]
  if (isPlayerView(player)) {
    player.hand--
  } else {
    player.hand = player.hand.filter(card => card !== move.card)
  }
  state.endOfSeason && delete state.currentPile // player can no longer pass on pile
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
      card.wildlifeType === WildlifeType.Active && player.abilities.push({animal:card.animal})
      break
  }
  if(state.endOfSeason === EndOfSeasonStep.Seeds && move.playerId !== undefined){
    // TODO: Is Kinkajou Mandatory ? See Trello Q#5 for more infos
    if(player.abilities.some(a => a.animal === Animal.Kinkajou && a.user !== true)){
      kinkajouMove({type:MoveType.PlayAbility,ability:{animal:Animal.Kinkajou},playerId:move.playerId}, player)
    } else {
      player.seeds.pop()
    }
  }
}