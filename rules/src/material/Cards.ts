import Card from './Card'
import DeckType from './DeckType'
import CardType from './CardType'
//import Plant from './Plant'
//import Weather from './Weather'
//import Threat from './Threat'
//import WildlifeName from './WildlifeName'
import WildlifeType from './WildlifeType'

const {SeedsDeck, RainforestDeck} = DeckType
const {RootTrunks, Canopies, Plants, Weathers, Threats, Wildlifes} = CardType
//const {Philodendron, Bromelia, Ferns, Seeds} = Plant
//const {Rain, Sun} = Weather
//const {Fire, Drought, Disease} = Threat
const {ActiveWildlife, MatingPair} = WildlifeType
//const {EmeraldBoa, Kinkajou, LeafcutterAnts, PoisonFrog, Sloth, Toucan} = WildlifeName


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

export const Philodendron: Card = {
    deckType: RainforestDeck,
    cardType: Plants,
    //plantName: Philodendron,
    //victoryPoints: {Int([Philodendron]/3): 8}
    numberOfCopies: 12
}

export const Bromelia: Card = {
    deckType: RainforestDeck,
    cardType: Plants,
    //plantName: Bromelia,
    //victoryPoints: {[Bromelia] = 1: 2, [Bromelia] = 2: 7, [Bromelia] > 2: -3}
    numberOfCopies: 11
}

export const Ferns: Card = {
    deckType: RainforestDeck,
    cardType: Plants,
    //plantName: Ferns,
    //victoryPoints: {isOdd([Ferns]), [Ferns]: 2}
    numberOfCopies: 13
}

export const Seeds: Card = {
    deckType: RainforestDeck,
    cardType: Plants,
    //plantName: Seeds,
    numberOfCopies: 5
}

export const Rain: Card = {
    deckType: RainforestDeck,
    cardType: Weathers,
    //weatherName: Rain,
    //victoryPoints: {Min([Rain],[Sun]): 5}
    numberOfCopies: 8
}

export const Sun: Card = {
    deckType: RainforestDeck,
    cardType: Weathers,
    //weatherName: Sun,
    numberOfCopies: 8
}

export const Fire: Card = {
    deckType: RainforestDeck,
    cardType: Threats,
    //threatName: Fire,
    numberOfCopies: 3
}

export const Drought: Card = {
    deckType: RainforestDeck,
    cardType: Threats,
    //threatName: Drought,
    numberOfCopies: 3
}

export const Disease: Card = {
    deckType: RainforestDeck,
    cardType: Threats,
    //threatName: Disease,
    numberOfCopies: 8
}

export const ActiveWildlife_EmeraldBoa: Card = {
    deckType: RainforestDeck,
    cardType: Wildlifes,
    wildlifeType: ActiveWildlife,
    //wildlifeName: EmeraldBoa,
    //activeWildlifeEffect:
    numberOfCopies: 2
}

export const ActiveWildlife_Kinkajou: Card = {
    deckType: RainforestDeck,
    cardType: Wildlifes,
    wildlifeType: ActiveWildlife,
    //wildlifeName: Kinkajou,
    //activeWildlifeEffect:
    numberOfCopies: 2
}

export const ActiveWildlife_LeafcutterAntsCard: Card = {
    deckType: RainforestDeck,
    cardType: Wildlifes,
    wildlifeType: ActiveWildlife,
    //wildlifeName: LeafcutterAnts,
    //activeWildlifeEffect:
    numberOfCopies: 2
}

export const ActiveWildlife_PoisonFrog: Card = {
    deckType: RainforestDeck,
    cardType: Wildlifes,
    wildlifeType: ActiveWildlife,
    //wildlifeName: PoisonFrog,
    //activeWildlifeEffect:
    numberOfCopies: 2
}

export const ActiveWildlife_Sloth: Card = {
    deckType: RainforestDeck,
    cardType: Wildlifes,
    wildlifeType: ActiveWildlife,
    //wildlifeName: Sloth,
    //activeWildlifeEffect:
    numberOfCopies: 2
}

export const ActiveWildlife_Toucan: Card = {
    deckType: RainforestDeck,
    cardType: Wildlifes,
    wildlifeType: ActiveWildlife,
    //wildlifeName: Toucan,
    //activeWildlifeEffect:
    numberOfCopies: 2
}

export const MatingPair_EmeraldBoa: Card = {
    deckType: RainforestDeck,
    cardType: Wildlifes,
    wildlifeType: MatingPair,
    //wildlifeName: EmeraldBoa,
    //victoryPoints:
    numberOfCopies: 2
}

export const MatingPair_Kinkajou: Card = {
    deckType: RainforestDeck,
    cardType: Wildlifes,
    wildlifeType: MatingPair,
    //wildlifeName: Kinkajou,
    //victoryPoints:
    numberOfCopies: 2
}

export const MatingPair_LeafcutterAntsCard: Card = {
    deckType: RainforestDeck,
    cardType: Wildlifes,
    wildlifeType: MatingPair,
    //wildlifeName: LeafcutterAnts,
    //victoryPoints:
    numberOfCopies: 2
}

export const MatingPair_PoisonFrog: Card = {
    deckType: RainforestDeck,
    cardType: Wildlifes,
    wildlifeType: MatingPair,
    //wildlifeName: PoisonFrog,
    //victoryPoints:
    numberOfCopies: 2
}

export const MatingPair_Sloth: Card = {
    deckType: RainforestDeck,
    cardType: Wildlifes,
    wildlifeType: MatingPair,
    //wildlifeName: Sloth,
    //victoryPoints:
    numberOfCopies: 2
}

export const MatingPair_Toucan: Card = {
    deckType: RainforestDeck,
    cardType: Wildlifes,
    wildlifeType: MatingPair,
    //wildlifeName: Toucan,
    //victoryPoints:
    numberOfCopies: 2
}

//export const cards: card[] = [
const cardDescriptions = [
    RootTrunk0, RootTrunk1, RootTrunk2,
    Canopy0, Canopy1, Canopy2,
    Philodendron, Bromelia, Ferns, Seeds,
    Rain, Sun,
    Fire, Drought, Disease,
    ActiveWildlife_EmeraldBoa, ActiveWildlife_Kinkajou, ActiveWildlife_LeafcutterAntsCard, ActiveWildlife_PoisonFrog, ActiveWildlife_Sloth, ActiveWildlife_Toucan,
    MatingPair_EmeraldBoa, MatingPair_Kinkajou, MatingPair_LeafcutterAntsCard, MatingPair_PoisonFrog, MatingPair_Sloth, MatingPair_Toucan
]
const cards = cardDescriptions.flatMap(card => Array(card.numberOfCopies).fill(card))

export const seedsCards = cards.filter(function(card) {
    return card.deckType === SeedsDeck
})

export const rainforestCards = cards.filter(function(card) {
    return card.deckType === RainforestDeck
})

export default cards

