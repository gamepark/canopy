import Card from './Card'
import DeckType from './DeckType'
import CardType from './CardType'
//import Plant from './Plant'
//import Weather from './Weather'
//import Threat from './Threat'
//import WildlifeName from './WildlifeName'
import WildlifeType from './WildlifeType'

const {SeedsDeck, RainforestDeck, StartingTrunk, ShiftingSeasonDeck} = DeckType
const {Trunk, Canopy, Plants, Seeds, Weather, Threats, Wildlife, ShiftingSeason} = CardType
//const {Philodendron, Bromelia, Ferns, Seeds} = Plant
//const {Rain, Sun} = Weather
//const {Fire, Drought, Disease} = Threat
const {ActiveWildlife, MatingPair} = WildlifeType
//const {EmeraldBoa, Kinkajou, LeafcutterAnts, PoisonFrog, Sloth, Toucan} = WildlifeName

export const SeasonOfCleansing: Card = {
    deckType: ShiftingSeasonDeck,
    cardType: ShiftingSeason,
    advancedCard: false,
    //shiftingSeasonEffect:
    numberOfCopies: 1
}

export const SeasonOfDanger: Card = {
    deckType: ShiftingSeasonDeck,
    cardType: ShiftingSeason,
    advancedCard: false,
    //shiftingSeasonEffect:
    numberOfCopies: 1
}

export const SeasonOfDiversity: Card = {
    deckType: ShiftingSeasonDeck,
    cardType: ShiftingSeason,
    advancedCard: false,
    //shiftingSeasonEffect:
    numberOfCopies: 1
}

export const SeasonOfFecundity: Card = {
    deckType: ShiftingSeasonDeck,
    cardType: ShiftingSeason,
    advancedCard: false,
    //shiftingSeasonEffect:
    numberOfCopies: 1
}

export const SeasonOfHunting: Card = {
    deckType: ShiftingSeasonDeck,
    cardType: ShiftingSeason,
    advancedCard: false,
    //shiftingSeasonEffect:
    numberOfCopies: 1
}

export const SeasonOfLeaves: Card = {
    deckType: ShiftingSeasonDeck,
    cardType: ShiftingSeason,
    advancedCard: false,
    //shiftingSeasonEffect:
    numberOfCopies: 1
}

export const SeasonOfMating: Card = {
    deckType: ShiftingSeasonDeck,
    cardType: ShiftingSeason,
    advancedCard: false,
    //shiftingSeasonEffect:
    numberOfCopies: 1
}

export const SeasonOfRot: Card = {
    deckType: ShiftingSeasonDeck,
    cardType: ShiftingSeason,
    advancedCard: false,
    //shiftingSeasonEffect:
    numberOfCopies: 1
}

export const SeasonOfSky: Card = {
    deckType: ShiftingSeasonDeck,
    cardType: ShiftingSeason,
    advancedCard: false,
    //shiftingSeasonEffect:
    numberOfCopies: 1
}

export const SeasonOfStature: Card = {
    deckType: ShiftingSeasonDeck,
    cardType: ShiftingSeason,
    advancedCard: false,
    //shiftingSeasonEffect:
    numberOfCopies: 1
}

export const SeasonOfSymbiotes: Card = {
    deckType: ShiftingSeasonDeck,
    cardType: ShiftingSeason,
    advancedCard: false,
    //shiftingSeasonEffect:
    numberOfCopies: 1
}

export const StartTrunk: Card = {
    deckType: StartingTrunk,
    cardType: Trunk,
    advancedCard: false,
    numberOfCopies: 4
}

export const sTrunk0: Card = {
    deckType: SeedsDeck,
    cardType: Trunk,
    advancedCard: false,
    numberOfCopies: 1
}

export const sTrunk1: Card = {
    deckType: SeedsDeck,
    cardType: Trunk,
    advancedCard: false,
    //endOfSeasonVictoryPoints: {[composeCompletedTree]: 1},
    numberOfCopies: 2
}

export const sTrunk2: Card = {
    deckType: SeedsDeck,
    cardType: Trunk,
    advancedCard: false,
    //endOfSeasonVictoryPoints: {[composeCompletedTree]: 2},
    numberOfCopies: 2
}

export const sCanopy0: Card = {
    deckType: SeedsDeck,
    cardType: Canopy,
    advancedCard: false,
    numberOfCopies: 1
}

export const sCanopy1: Card = {
    deckType: SeedsDeck,
    cardType: Canopy,
    advancedCard: false,
    //endOfSeasonVictoryPoints: {[Trunk]: 1},
    numberOfCopies: 1
}

export const sCanopy2: Card = {
    deckType: SeedsDeck,
    cardType: Canopy,
    advancedCard: false,
    //endOfSeasonVictoryPoints: {[Trunk]: 2},
    numberOfCopies: 1
}

export const sFern: Card = {
    deckType: SeedsDeck,
    cardType: Plants,
    advancedCard: false,
    //plantName: Ferns,
    //endOfSeasonVictoryPoints: {isOdd([Ferns]), [Ferns]: 2}
    numberOfCopies: 3
}

export const sBromelia: Card = {
    deckType: SeedsDeck,
    cardType: Plants,
    advancedCard: false,
    //plantName: Bromelia,
    //endOfSeasonVictoryPoints: {[Bromelia] = 1: 2, [Bromelia] = 2: 7, [Bromelia] > 2: -3}
    numberOfCopies: 3
}

export const sMonstera: Card = {
    deckType: SeedsDeck,
    cardType: Plants,
    advancedCard: false,
    //plantName: Philodendron,
    //endOfSeasonVictoryPoints: {Int([Philodendron]/3): 8}
    numberOfCopies: 3
}

export const sRain: Card = {
    deckType: SeedsDeck,
    cardType: Weather,
    advancedCard: false,
    //weatherName: Rain,
    //endOfSeasonVictoryPoints: {Min([Rain],[Sun]): 5}
    numberOfCopies: 2
}

export const sSun: Card = {
    deckType: SeedsDeck,
    cardType: Weather,
    advancedCard: false,
    //weatherName: Sun,
    numberOfCopies: 2
}

export const rTrunk0: Card = {
    deckType: RainforestDeck,
    cardType: Trunk,
    advancedCard: false,
    numberOfCopies: 5
}

export const rTrunk1: Card = {
    deckType: RainforestDeck,
    cardType: Trunk,
    advancedCard: false,
    //endOfSeasonVictoryPoints: {[composeCompletedTree]: 1},
    numberOfCopies: 8
}

export const rTrunk2: Card = {
    deckType: RainforestDeck,
    cardType: Trunk,
    advancedCard: false,
    //endOfSeasonVictoryPoints: {[composeCompletedTree]: 2},
    numberOfCopies: 5
}

export const rCanopy0: Card = {
    deckType: RainforestDeck,
    cardType: Canopy,
    advancedCard: false,
    numberOfCopies: 3
}

export const rCanopy1: Card = {
    deckType: RainforestDeck,
    cardType: Canopy,
    advancedCard: false,
    //endOfSeasonVictoryPoints: {[Trunk]: 1},
    numberOfCopies: 6
}

export const rCanopy2: Card = {
    deckType: RainforestDeck,
    cardType: Canopy,
    advancedCard: false,
    //endOfSeasonVictoryPoints: {[Trunk]: 2},
    numberOfCopies: 2
}

export const rFern: Card = {
    deckType: RainforestDeck,
    cardType: Plants,
    advancedCard: false,
    //plantName: Ferns,
    //endOfSeasonVictoryPoints: {isOdd([Ferns]), [Ferns]: 2}
    numberOfCopies: 13
}

export const rBromelia: Card = {
    deckType: RainforestDeck,
    cardType: Plants,
    advancedCard: false,
    //plantName: Bromelia,
    //endOfSeasonVictoryPoints: {[Bromelia] = 1: 2, [Bromelia] = 2: 7, [Bromelia] > 2: -3}
    numberOfCopies: 11
}

export const rMonstera: Card = {
    deckType: RainforestDeck,
    cardType: Plants,
    advancedCard: false,
    //plantName: Philodendron,
    //endOfSeasonVictoryPoints: {Int([Philodendron]/3): 8}
    numberOfCopies: 11
}

export const Seed: Card = {
    deckType: RainforestDeck,
    cardType: Seeds,
    advancedCard: false,
    //plantName: Seeds,
    numberOfCopies: 5
}

export const rRain: Card = {
    deckType: RainforestDeck,
    cardType: Weather,
    advancedCard: false,
    //weatherName: Rain,
    //endOfSeasonVictoryPoints: {Min([Rain],[Sun]): 5}
    numberOfCopies: 8
}

export const rSun: Card = {
    deckType: RainforestDeck,
    cardType: Weather,
    advancedCard: false,
    //weatherName: Sun,
    numberOfCopies: 8
}

export const Drought: Card = {
    deckType: RainforestDeck,
    cardType: Threats,
    advancedCard: false,
    //threatName: Drought,
    numberOfCopies: 3
}

export const Disease: Card = {
    deckType: RainforestDeck,
    cardType: Threats,
    advancedCard: false,
    //threatName: Disease,
    numberOfCopies: 6
}

export const Fire: Card = {
    deckType: RainforestDeck,
    cardType: Threats,
    advancedCard: false,
    //threatName: Fire,
    numberOfCopies: 6
}

export const ActiveWildlife_EmeraldBoa: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: false,
    wildlifeType: ActiveWildlife,
    //wildlifeName: EmeraldBoa,
    //activeWildlifeEffect:
    endOfSeasonVictoryPoints: -1,
    numberOfCopies: 1
}

export const ActiveWildlife_Kinkajou: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: false,
    wildlifeType: ActiveWildlife,
    //wildlifeName: Kinkajou,
    //activeWildlifeEffect:
    endOfGameVictoryPoints: 2,
    numberOfCopies: 1
}

export const ActiveWildlife_LeafcutterAnts: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: false,
    wildlifeType: ActiveWildlife,
    //wildlifeName: LeafcutterAnts,
    //activeWildlifeEffect:
    numberOfCopies: 1
}

export const ActiveWildlife_PoisonDartFrog: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: false,
    wildlifeType: ActiveWildlife,
    //wildlifeName: PoisonFrog,
    //activeWildlifeEffect:
    endOfGameVictoryPoints: 2,
    numberOfCopies: 1
}

export const ActiveWildlife_Sloth: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: false,
    wildlifeType: ActiveWildlife,
    //wildlifeName: Sloth,
    //activeWildlifeEffect:
    endOfGameVictoryPoints: 2,
    numberOfCopies: 1
}

export const ActiveWildlife_Toucan: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: false,
    wildlifeType: ActiveWildlife,
    //wildlifeName: Toucan,
    //activeWildlifeEffect:
    endOfGameVictoryPoints: 1,
    numberOfCopies: 1
}

export const MatingPair_EmeraldBoa: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: false,
    wildlifeType: MatingPair,
    //wildlifeName: EmeraldBoa,
    //endOfGameVictoryPoints: {2*count(EmeraldBoa) - 1 },
    numberOfCopies: 1
}

export const MatingPair_Kinkajou: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: false,
    wildlifeType: MatingPair,
    //wildlifeName: Kinkajou,
    //endOfGameVictoryPoints: {2*count(Kinkajou) - 1 },
    numberOfCopies: 1
}

export const MatingPair_LeafcutterAnts: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: false,
    wildlifeType: MatingPair,
    //wildlifeName: LeafcutterAnts,
    //endOfGameVictoryPoints: {2*count(LeafcutterAnts) - 1 },
    numberOfCopies: 1
}

export const MatingPair_PoisonDartFrog: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: false,
    wildlifeType: MatingPair,
    //wildlifeName: PoisonFrog,
    //endOfGameVictoryPoints: {2*count(PoisonDartFrog) - 1 },
    numberOfCopies: 1
}

export const MatingPair_Sloth: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: false,
    wildlifeType: MatingPair,
    //wildlifeName: Sloth,
    //endOfGameVictoryPoints: {2*count(Sloth) - 1 },
    numberOfCopies: 1
}

export const MatingPair_Toucan: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: false,
    wildlifeType: MatingPair,
    //wildlifeName: Toucan,
    //endOfGameVictoryPoints: {2*count(Toucan) - 1 },
    numberOfCopies: 1
}

export const CoincapFungi: Card = {
    deckType: RainforestDeck,
    cardType: Plants,
    advancedCard: true,
    endOfSeasonVictoryPoints: 1,
    numberOfCopies: 2
}

export const Lianas: Card = {
    deckType: RainforestDeck,
    cardType: Plants,
    advancedCard: true,
    endOfSeasonVictoryPoints: {[Canopy]: 1},
    numberOfCopies: 3
}

export const Orchid: Card = {
    deckType: RainforestDeck,
    cardType: Plants,
    advancedCard: true,
    endOfSeasonVictoryPoints: 4,
    numberOfCopies: 3
}

export const PitcherPlant: Card = {
    deckType: RainforestDeck,
    cardType: Plants,
    advancedCard: true,
    numberOfCopies: 2
}

export const Lightning: Card = {
    deckType: RainforestDeck,
    cardType: Threats,
    advancedCard: true,
    numberOfCopies: 2
}

export const Blight: Card = {
    deckType: RainforestDeck,
    cardType: Threats,
    advancedCard: true,
    numberOfCopies: 2
}

export const ActiveWildlife_GoldenLionTamarin: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: true,
    wildlifeType: ActiveWildlife,
    //wildlifeName: GoldenLifeTamarin,
    //activeWildlifeEffect:
    numberOfCopies: 1
}

export const ActiveWildlife_GoliathBirdEater: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: true,
    wildlifeType: ActiveWildlife,
    //wildlifeName: GoliathBirdEater,
    //activeWildlifeEffect:
    endOfSeasonVictoryPoints: 2,
    numberOfCopies: 1
}

export const ActiveWildlife_HarmoniaMantle: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: true,
    wildlifeType: ActiveWildlife,
    //wildlifeName: HarmoniaMantle,
    //activeWildlifeEffect:
    numberOfCopies: 2
}

export const ActiveWildlife_Hoatzin: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: true,
    wildlifeType: ActiveWildlife,
    //wildlifeName: Hoatzin,
    //activeWildlifeEffect:
    endOfSeasonVictoryPoints: 2,
    numberOfCopies: 1
}

export const ActiveWildlife_HowlerMonkey: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: true,
    wildlifeType: ActiveWildlife,
    //wildlifeName: HowlerMonkey,
    //activeWildlifeEffect:
    endOfSeasonVictoryPoints: 1,
    numberOfCopies: 1
}

export const ActiveWildlife_Jaguar: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: true,
    wildlifeType: ActiveWildlife,
    //wildlifeName: Jaguar,
    //activeWildlifeEffect:
    endOfSeasonVictoryPoints: -3,
    numberOfCopies: 1
}

export const ActiveWildlife_PygmyMarmoset: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: true,
    wildlifeType: ActiveWildlife,
    //wildlifeName: PygmyMarmoset,
    //activeWildlifeEffect:
    //endOfSeasonVictoryPoints: {[DifferentHeightTrees]: 1}
    numberOfCopies: 2
}

export const MatingPair_GoldenLionTamarin: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: true,
    wildlifeType: MatingPair,
    //wildlifeName: GoldenLifeTamarin,
    //activeWildlifeEffect:
    //endOfGameVictoryPoints: {2*count(GoldenLionTamarin) - 1 },
    numberOfCopies: 1
}

export const MatingPair_GoliathBirdEater: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: true,
    wildlifeType: MatingPair,
    //wildlifeName: GoliathBirdEater,
    //activeWildlifeEffect:
    //endOfGameVictoryPoints: {2*count(GoliathBirdEater) - 1 },
    numberOfCopies: 1
}

//export const MatingPair_HarmoniaMantle: Card = {
//    deckType: RainforestDeck,
//    cardType: Wildlife,
//   advancedCard: true,
//    wildlifeType: MatingPair,
    //wildlifeName: HarmoniaMantle,
    //activeWildlifeEffect:
//    numberOfCopies: 1
//}

export const MatingPair_Hoatzin: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: true,
    wildlifeType: MatingPair,
    //wildlifeName: Hoatzin,
    //activeWildlifeEffect:
    //endOfGameVictoryPoints: {2*count(Hoatzin) - 1 },
    numberOfCopies: 1
}

export const MatingPair_HowlerMonkey: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: true,
    wildlifeType: MatingPair,
    //wildlifeName: HowlerMonkey,
    //activeWildlifeEffect:
    //endOfGameVictoryPoints: {2*count(HowlerMonkey) - 1 },
    numberOfCopies: 1
}

export const MatingPair_Jaguar: Card = {
    deckType: RainforestDeck,
    cardType: Wildlife,
    advancedCard: true,
    wildlifeType: MatingPair,
    //wildlifeName: Jaguar,
    //activeWildlifeEffect:
    //endOfGameVictoryPoints: {2*count(Jaguar) - 1 },
    numberOfCopies: 1
}

//export const MatingPair_PygmyMarmoset: Card = {
//    deckType: RainforestDeck,
//    cardType: Wildlife,
//   advancedCard: true,
//    wildlifeType: MatingPair,
   //wildlifeName: PygmyMarmoset,
   //activeWildlifeEffect:
//    numberOfCopies: 1
//}

//export const cards: card[] = [
const cardDescriptions = [
    SeasonOfCleansing, SeasonOfDanger, SeasonOfDiversity, SeasonOfFecundity, SeasonOfHunting, SeasonOfLeaves, SeasonOfMating, SeasonOfRot, SeasonOfSky, SeasonOfStature, SeasonOfSymbiotes,
    StartTrunk,
    sTrunk0, sTrunk1, sTrunk2,sCanopy0, sCanopy1, sCanopy2, sFern, sBromelia, sMonstera, sRain, sSun,
    rTrunk0, rTrunk1, rTrunk2, rCanopy0, rCanopy1, rCanopy2, rFern, rBromelia, rMonstera, Seed, rRain, rSun, Drought, Disease, Fire,
    ActiveWildlife_EmeraldBoa, ActiveWildlife_Kinkajou, ActiveWildlife_LeafcutterAnts, ActiveWildlife_PoisonDartFrog, ActiveWildlife_Sloth, ActiveWildlife_Toucan,
    MatingPair_EmeraldBoa, MatingPair_Kinkajou, MatingPair_LeafcutterAnts, MatingPair_PoisonDartFrog, MatingPair_Sloth, MatingPair_Toucan,
    CoincapFungi, Lianas, Orchid, PitcherPlant, Lightning, Blight,
    ActiveWildlife_GoldenLionTamarin, ActiveWildlife_GoliathBirdEater, ActiveWildlife_HarmoniaMantle, ActiveWildlife_Hoatzin, ActiveWildlife_HowlerMonkey, ActiveWildlife_Jaguar, ActiveWildlife_PygmyMarmoset,
    MatingPair_GoldenLionTamarin, MatingPair_GoliathBirdEater, MatingPair_Hoatzin, MatingPair_HowlerMonkey, MatingPair_Jaguar
]
const cards = cardDescriptions.flatMap(card => Array(card.numberOfCopies).fill(card))

export const startCards = cards.filter(function(card) {
    return card.deckType === StartingTrunk
})

export const seedsCards = cards.filter(function(card) {
    return card.deckType === SeedsDeck
})

export const rainforestCards = cards.filter(function(card) {
    return card.deckType === RainforestDeck
})

export default cards

