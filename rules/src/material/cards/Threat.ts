import CardType from './CardType'
import Deck from './Deck'
import ThreatType from './ThreatType'

type Threat = {
  deck: Deck.Rainforest
  type: CardType.Threat
  threat: ThreatType
  advanced?: boolean
}

export default Threat