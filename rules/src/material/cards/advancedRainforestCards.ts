import Animal from './Animal'
import Card from './Card'
import CardType from './CardType'
import Deck from './Deck'
import PlantSpecies from './PlantSpecies'
import ThreatType from './ThreatType'
import WildlifeType from './WildlifeType'

const {Rainforest} = Deck
const {Plant, Threat, Wildlife} = CardType
const {CoincapFungi, Lianas, Orchid, PitcherPlant} = PlantSpecies
const {Lightning, Blight} = ThreatType
const {GoldenLionTamarin, GoliathBirdEater, HarmoniaMantle, Hoatzin, HowlerMonkey, Jaguar, PygmyMarmoset} = Animal
const {Active, Mating} = WildlifeType

const advancedRainforestCards: Card[] = [
  ...Array(2).fill({deck: Rainforest, advanced: true, type: Plant, species: CoincapFungi}),
  ...Array(3).fill({deck: Rainforest, advanced: true, type: Plant, species: Lianas}),
  ...Array(3).fill({deck: Rainforest, advanced: true, type: Plant, species: Orchid}),
  ...Array(2).fill({deck: Rainforest, advanced: true, type: Plant, species: PitcherPlant}),
  ...Array(2).fill({deck: Rainforest, advanced: true, type: Threat, threat: Lightning}),
  ...Array(2).fill({deck: Rainforest, advanced: true, type: Threat, threat: Blight}),
  {deck: Rainforest, advanced: true, type: Wildlife, animal: GoldenLionTamarin, wildlifeType: Active},
  {deck: Rainforest, advanced: true, type: Wildlife, animal: GoldenLionTamarin, wildlifeType: Mating},
  {deck: Rainforest, advanced: true, type: Wildlife, animal: GoliathBirdEater, wildlifeType: Active},
  {deck: Rainforest, advanced: true, type: Wildlife, animal: GoliathBirdEater, wildlifeType: Mating},
  ...Array(2).fill({deck: Rainforest, advanced: true, type: Wildlife, animal: HarmoniaMantle, wildlifeType: Active}),
  {deck: Rainforest, advanced: true, type: Wildlife, animal: Hoatzin, wildlifeType: Active},
  {deck: Rainforest, advanced: true, type: Wildlife, animal: Hoatzin, wildlifeType: Mating},
  {deck: Rainforest, advanced: true, type: Wildlife, animal: HowlerMonkey, wildlifeType: Active},
  {deck: Rainforest, advanced: true, type: Wildlife, animal: HowlerMonkey, wildlifeType: Mating},
  {deck: Rainforest, advanced: true, type: Wildlife, animal: Jaguar, wildlifeType: Active},
  {deck: Rainforest, advanced: true, type: Wildlife, animal: Jaguar, wildlifeType: Mating},
  ...Array(2).fill({deck: Rainforest, advanced: true, type: Wildlife, animal: PygmyMarmoset, wildlifeType: Active})
]

export default advancedRainforestCards