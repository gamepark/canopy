import EndOfSeasonStep from './EndOfSeasonStep'
import PlayerState from './PlayerState'

/**
 * In here, you describe what a GameState will look like at any time during a game.
 */
type GameState = {
  players: PlayerState[]
  activePlayer?: number
  currentPile?: number
  addCardToPreviousPile?: boolean
  season: number
  seedsDeck: number[]
  seasonPiles: [number[], number[], number[]]
  newGrowthPiles: [number[], number[], number[]]
  endOfSeason?: EndOfSeasonStep
}

export default GameState