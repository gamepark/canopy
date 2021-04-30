import Card from './Card'
import CardType from './CardType'
import Deck from './Deck'
import PlantSpecies from './PlantSpecies'
import WeatherType from './WeatherType'

const {Seed} = Deck
const {Trunk, Canopy, Plant, Weather} = CardType
const {Fern, Bromelia, Monstera} = PlantSpecies
const {Rain, Sun} = WeatherType

const seedCards: Card[] = [
  {deck: Seed, type: Trunk, value: 0},
  ...Array(2).fill({deck: Seed, type: Trunk, value: 1}),
  ...Array(2).fill({deck: Seed, type: Trunk, value: 2}),
  {deck: Seed, type: Canopy, value: 0},
  {deck: Seed, type: Canopy, value: 1},
  {deck: Seed, type: Canopy, value: 2},
  ...Array(3).fill({deck: Seed, type: Plant, species: Fern}),
  ...Array(3).fill({deck: Seed, type: Plant, species: Bromelia}),
  ...Array(3).fill({deck: Seed, type: Plant, species: Monstera}),
  ...Array(2).fill({deck: Seed, type: Weather, weather: Rain}),
  ...Array(2).fill({deck: Seed, type: Weather, weather: Sun})
]

export default seedCards