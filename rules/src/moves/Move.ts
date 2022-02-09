import DealCard from './DealCard'
import DealPlayerSeedsCards from './DealPlayerSeedsCards'
import DrawOneFromSeasonDeck from './DrawOneFromSeasonDeck'
import LookAtNewGrowthPile from './LookAtNewGrowthPile'
import NextEndSeasonStep from './NextEndSeasonStep'
import PassOnPile from './PassOnPile'
import PlayAbility from './PlayAbility'
import PlayCard from './PlayCard'
import SetActivePlayer from './SetActivePlayer'
import DiscardSeedsCards from './DiscardSeedsCards';
import ScoreTrees from './ScoreTrees'
import ScorePlantsAndWeather from './ScorePlantsAndWeather'
import CleanUp from './CleanUp'
import EndGameScores from './EndGameScores'

type Move = DealCard | SetActivePlayer | LookAtNewGrowthPile | DrawOneFromSeasonDeck | PlayCard | PassOnPile | NextEndSeasonStep
            | PlayAbility | DealPlayerSeedsCards | DiscardSeedsCards | ScoreTrees | ScorePlantsAndWeather | CleanUp | EndGameScores

export default Move