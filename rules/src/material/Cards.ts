import Card from './Card'
import DeckType from './DeckType'
import CardType from './CardType'
import Plant from './Plant'
import Weather from './Weather'
import Threat from './Threat'

const {SeedsDeck, RainforestDeck} = DeckType
const {RootTrunks, Canopies, Plants, Weathers, Threats, Wildlifes} = CardType
const {Philodendron, Bromelia, Ferns, Seeds} = Plant
const {Rain, Sun} = Weather
const {Fire, Drought, Disease} = Threat

export const RootTrunk0: Card = {
    deckType: RainforestDeck,
    cardType: RootTrunks,
    numberOfCopies: 6
}

export const RootTrunk1: Card = {
    deckType: RainforestDeck,
    cardType: RootTrunks,
    victoryPoints: 1,
    numberOfCopies: 6
}

export const RootTrunk2: Card = {
    deckType: RainforestDeck,
    cardType: RootTrunks,
    victoryPoints: 2,
    numberOfCopies: 6
}

export const Canopy0: Card = {
    deckType: RainforestDeck,
    cardType: Canopies,
    numberOfCopies: 2
}

export const Canopy1: Card = {
    deckType: RainforestDeck,
    cardType: Canopies,
    victoryPoints: {[RootTrunks]: 1},
    numberOfCopies: 5
}

export const Canopy2: Card = {
    deckType: RainforestDeck,
    cardType: Canopies,
    victoryPoints: {[RootTrunks]: 2},
    numberOfCopies: 3
}

export const PhilodendronCard: Card = {
    deckType: RainforestDeck,
    cardType: Plants,
    plantName: Philodendron,
    //victoryPoints: {Int([Philodendron]/3): 8}
    numberOfCopies: 12
}

export const BromeliaCard: Card = {
    deckType: RainforestDeck,
    cardType: Plants,
    plantName: Bromelia,
    //victoryPoints: {[Bromelia] = 1: 2, [Bromelia] = 2: 7, [Bromelia] > 2: -3}
    numberOfCopies: 11
}

export const FernsCard: Card = {
    deckType: RainforestDeck,
    cardType: Plants,
    plantName: Ferns,
    //victoryPoints: {isOdd([Ferns]), [Ferns]: 2}
    numberOfCopies: 13
}

export const SeedsCard: Card = {
    deckType: RainforestDeck,
    cardType: Plants,
    plantName: Seeds,
    numberOfCopies: 5
}

export const RainCard: Card = {
    deckType: RainforestDeck,
    cardType: Weathers,
    weatherName: Rain,
    //victoryPoints: {Min([Rain],[Sun]): 5}
    numberOfCopies: 8
}

export const SunCard: Card = {
    deckType: RainforestDeck,
    cardType: Weathers,
    weatherName: Sun,
    numberOfCopies: 8
}

export const FireCard: Card = {
    deckType: RainforestDeck,
    cardType: Threats,
    threatName: Fire,
    numberOfCopies: 3
}

export const DroughtCard: Card = {
    deckType: RainforestDeck,
    cardType: Threats,
    threatName: Drought,
    numberOfCopies: 3
}

export const DiseaseCard: Card = {
    deckType: RainforestDeck,
    cardType: Threats,
    threatName: Disease,
    numberOfCopies: 8
}

const cardDescriptions = [RootTrunk0, RootTrunk1, RootTrunk2, Canopy0, Canopy1, Canopy2, PhilodendronCard, BromeliaCard, FernsCard, SeedsCard, RainCard, SunCard, FireCard, DroughtCard, DiseaseCard]
const cards = cardDescriptions.flatMap(card => Array(card.numberOfCopies).fill(card))

export default cards

