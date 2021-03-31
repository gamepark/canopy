import PlayerState from './PlayerState'

/**
 * In here, you describe what a GameState will look like at any time during a game.
 */
type GameState = {
  players: [PlayerState, PlayerState]
  activePlayer?: number
  season: number
  seedsDeck: number[]
  rainforestDecks: [number[],number[],number[]]
  newGrowthDecks: [number[],number[],number[]]
}

export default GameState