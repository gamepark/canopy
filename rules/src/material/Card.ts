import CardType from './CardType'
import CardSubType from './CardSubType'
import PlantsCard from './PlantsCard'
import WeatherCard from './WeatherCard'
import ThreatsCard from './ThreatsCard'

type Card = {
  type: CardType
  subType: CardSubType
  plantsName?: PlantsCard
  weatherName?: WeatherCard
  threatsName?: ThreatsCard
  victoryPoints?: number | { [key in CardSubType]?: number | CardSubType }
  numberOfCopies?: number
}

export default Card

