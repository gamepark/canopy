import GameState from './GameState'
import PlayerState from './PlayerState'
import PlayerView from './PlayerView'

/**
 * In here, you describe what a GameView will look like at any time during a game.
 * It usually derives from the GameState, because only a few properties change.
 */
// Here is a example of a "Game View": the deck content is hidden, instead it is replaced with the number of cards remaining inside
type GameView = Omit<GameState, 'players' | 'seedsDeck' | 'seasonPiles' | 'newGrowthPiles'> & {
  players: (PlayerView | PlayerState)[]
  seedsDeck: number
  seasonPiles: number[]
  newGrowthPiles: number[]
}

export function isGameView(game: GameState | GameView): game is GameView {
  return typeof game.seedsDeck === 'number'
}

export default GameView