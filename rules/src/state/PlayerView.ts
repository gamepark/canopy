import PlayerState from './PlayerState'

type PlayerView = Omit<PlayerState, 'hand'> & {
  hand: number
}

export default PlayerView

export function isPlayerView(player: PlayerState | PlayerView): player is PlayerView {
  return typeof player.hand === 'number'
}

export function hidePlayerHand(player: PlayerState): PlayerView {
  return {...player, hand: player.hand.length}
}