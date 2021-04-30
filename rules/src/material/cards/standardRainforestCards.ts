import Animal from './Animal'
import Card from './Card'
import CardType from './CardType'
import Deck from './Deck'
import PlantSpecies from './PlantSpecies'
import ThreatType from './ThreatType'
import WeatherType from './WeatherType'
import WildlifeType from './WildlifeType'

const {Rainforest} = Deck
const {Trunk, Canopy, Plant, Seed, Weather, Threat, Wildlife} = CardType
const {Fern, Bromelia, Monstera} = PlantSpecies
const {Rain, Sun} = WeatherType
const {Drought, Disease, Fire} = ThreatType
const {EmeraldBoa, Kinkajou, LeafcutterAnts, PoisonDartFrog, Sloth, Toucan} = Animal
const {Active, Mating} = WildlifeType

const standardRainforestCards: Card[] = [
  ...Array(5).fill({deck: Rainforest, type: Trunk, value: 0}),
  ...Array(8).fill({deck: Rainforest, type: Trunk, value: 1}),
  ...Array(5).fill({deck: Rainforest, type: Trunk, value: 2}),
  ...Array(3).fill({deck: Rainforest, type: Canopy, value: 0}),
  ...Array(6).fill({deck: Rainforest, type: Canopy, value: 1}),
  ...Array(2).fill({deck: Rainforest, type: Canopy, value: 2}),
  ...Array(13).fill({deck: Rainforest, type: Plant, species: Fern}),
  ...Array(11).fill({deck: Rainforest, type: Plant, species: Bromelia}),
  ...Array(11).fill({deck: Rainforest, type: Plant, species: Monstera}),
  ...Array(5).fill({deck: Rainforest, type: Seed}),
  ...Array(8).fill({deck: Rainforest, type: Weather, weather: Rain}),
  ...Array(8).fill({deck: Rainforest, type: Weather, weather: Sun}),
  ...Array(3).fill({deck: Rainforest, type: Threat, threat: Drought}),
  ...Array(6).fill({deck: Rainforest, type: Threat, threat: Disease}),
  ...Array(6).fill({deck: Rainforest, type: Threat, threat: Fire}),
  {deck: Rainforest, type: Wildlife, animal: EmeraldBoa, wildlifeType: Active},
  {deck: Rainforest, type: Wildlife, animal: EmeraldBoa, wildlifeType: Mating},
  {deck: Rainforest, type: Wildlife, animal: Kinkajou, wildlifeType: Active},
  {deck: Rainforest, type: Wildlife, animal: Kinkajou, wildlifeType: Mating},
  {deck: Rainforest, type: Wildlife, animal: LeafcutterAnts, wildlifeType: Active},
  {deck: Rainforest, type: Wildlife, animal: LeafcutterAnts, wildlifeType: Mating},
  {deck: Rainforest, type: Wildlife, animal: PoisonDartFrog, wildlifeType: Active},
  {deck: Rainforest, type: Wildlife, animal: PoisonDartFrog, wildlifeType: Mating},
  {deck: Rainforest, type: Wildlife, animal: Sloth, wildlifeType: Active},
  {deck: Rainforest, type: Wildlife, animal: Sloth, wildlifeType: Mating},
  {deck: Rainforest, type: Wildlife, animal: Toucan, wildlifeType: Active},
  {deck: Rainforest, type: Wildlife, animal: Toucan, wildlifeType: Mating}
]

export default standardRainforestCards