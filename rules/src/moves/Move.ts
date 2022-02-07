import DealCard from './DealCard'
import DrawOneFromSeasonDeck from './DrawOneFromSeasonDeck'
import LookAtNewGrowthPile from './LookAtNewGrowthPile'
import NextEndSeasonStep from './NextEndSeasonStep'
import PassOnPile from './PassOnPile'
import PlayAbility from './PlayAbility'
import PlayCard from './PlayCard'
import SetActivePlayer from './SetActivePlayer'

type Move = DealCard | SetActivePlayer | LookAtNewGrowthPile | DrawOneFromSeasonDeck | PlayCard | PassOnPile | NextEndSeasonStep
            | PlayAbility

export default Move