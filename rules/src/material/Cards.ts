import Card from './Card'
import CardType from './CardType'
import CardSubType from './CardSubType'
import PlantsCard from './PlantsCard'
import WeatherCard from './WeatherCard'
import ThreatsCard from './ThreatsCard'

const {SeedsCard, RainforestCard} = CardType
const {RootTrunk, Canopy, Plants, Weather, Threats, Wildlife} = CardSubType
const {Philodendron, Bromelia, Ferns, Seeds} = PlantsCard
const {Rain, Sun} = WeatherCard
const {Fire, Drought, Disease} = ThreatsCard

export const RootTrunk0: Card = {
    type: RainforestCard,
    subType: RootTrunk,
    numberOfCopies: 6
}

export const RootTrunk1: Card = {
    type: RainforestCard,
    subType: RootTrunk,
    victoryPoints: 1,
    numberOfCopies: 6
}

export const RootTrunk2: Card = {
    type: RainforestCard,
    subType: RootTrunk,
    victoryPoints: 2,
    numberOfCopies: 6
}

export const Canopy0: Card = {
    type: RainforestCard,
    subType: Canopy,
    numberOfCopies: 2
}

export const Canopy1: Card = {
    type: RainforestCard,
    subType: Canopy,
    victoryPoints: {[RootTrunk]: 1},
    numberOfCopies: 5
}

export const Canopy2: Card = {
    type: RainforestCard,
    subType: Canopy,
    victoryPoints: {[RootTrunk]: 2},
    numberOfCopies: 3
}

export const PhilodendronCard: Card = {
    type: RainforestCard,
    subType: Plants,
    plantsName: Philodendron,
    victoryPoints: {Int([Philodendron]/3): 8}
    numberOfCopies: 12
}

export const BromeliaCard: Card = {
    type: RainforestCard,
    subType: Plants,
    plantsName: Bromelia,
    victoryPoints: {[Bromelia] = 1: 2, [Bromelia] = 2: 7, [Bromelia] > 2: -3}
    numberOfCopies: 11
}

export const FernsCard: Card = {
    type: RainforestCard,
    subType: Plants,
    plantsName: Ferns,
    victoryPoints: {isOdd([Ferns]), [Ferns]: 2}
    numberOfCopies: 13
}

export const RainCard: Card = {
    type: RainforestCard,
    subType: Weather,
    weatherName: Rain,
    victoryPoints: {Min([Rain],[Sun]): 5}
    numberOfCopies: 8
}

export const SunCard: Card = {
    type: RainforestCard,
    subType: Weather,
    weatherName: Sun,
    numberOfCopies: 8
}