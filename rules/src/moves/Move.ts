import DealCard from './DealCard'
import DrawOneFromSeasonDeck from './DrawOneFromSeasonDeck'
import LookAtNewGrowthPile from './LookAtNewGrowthPile'
import PassOnPile from './PassOnPile'
import PlayCard from './PlayCard'
import SetActivePlayer from './SetActivePlayer'

/**
 * A "Move" is the combination of all the types of moves that exists in the game
 */
type Move = DealCard | SetActivePlayer | LookAtNewGrowthPile | DrawOneFromSeasonDeck | PlayCard | PassOnPile

export default Move