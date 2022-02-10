import { getFirstCardId } from "../material/cards"
import Animal, { pygmyMarmosetScore, scoreAnimals } from "../material/cards/Animal"
import CardType from "../material/cards/CardType"
import Deck from "../material/cards/Deck"
import WildlifeType, { matingScore } from "../material/cards/WildlifeType"
import Tree from "../state/Tree"

describe('tests of animals scoring functions', () => {
    const trunkId:number = getFirstCardId(c => c.type === CardType.Trunk)
    const canopyId:number = getFirstCardId(c => c.type === CardType.Canopy)
    const boaSolo:number[] = [getFirstCardId(c => c.type === CardType.Wildlife && c.animal === Animal.EmeraldBoa && c.wildlifeType === WildlifeType.Mating)]
    const boaCouple:number[] = [getFirstCardId(c => c.type === CardType.Wildlife && c.animal === Animal.EmeraldBoa && c.wildlifeType === WildlifeType.Active),
                             getFirstCardId(c => c.type === CardType.Wildlife && c.animal === Animal.EmeraldBoa && c.wildlifeType === WildlifeType.Mating)]
    const jaguarCouple:number[] = [getFirstCardId(c => c.type === CardType.Wildlife && c.animal === Animal.Jaguar && c.wildlifeType === WildlifeType.Active),
                             getFirstCardId(c => c.type === CardType.Wildlife && c.animal === Animal.Jaguar && c.wildlifeType === WildlifeType.Mating)]
    const kinkajouCouple:number[] = [getFirstCardId(c => c.type === CardType.Wildlife && c.animal === Animal.Kinkajou && c.wildlifeType === WildlifeType.Active),
                                     getFirstCardId(c => c.type === CardType.Wildlife && c.animal === Animal.Kinkajou && c.wildlifeType === WildlifeType.Mating)]

    test('matingScore', () => {
        expect(matingScore({animal:Animal.EmeraldBoa, deck:Deck.Rainforest, type:CardType.Wildlife, wildlifeType: WildlifeType.Active}, boaSolo)).toBe(2)
        expect(matingScore({animal:Animal.EmeraldBoa, deck:Deck.Rainforest, type:CardType.Wildlife, wildlifeType: WildlifeType.Active}, boaCouple)).toBe(5)
        expect(matingScore({animal:Animal.Jaguar, deck:Deck.Rainforest, type:CardType.Wildlife, wildlifeType: WildlifeType.Active}, jaguarCouple)).toBe(4)
    })

    test('pygmyMarmosetScore', () => {
        const forest1:Tree[] = [{trunk:[trunkId]}]
        const forest2:Tree[] = [{trunk:[trunkId], canopy:canopyId}]
        const forest3:Tree[] = [{trunk:[trunkId], canopy:canopyId},{trunk:[trunkId], canopy:canopyId}]
        const forest4:Tree[] = [{trunk:[trunkId], canopy:canopyId},{trunk:[trunkId], canopy:canopyId}, {trunk:[trunkId, trunkId], canopy:canopyId}, {trunk:[trunkId, trunkId, trunkId], canopy:canopyId}]
        expect(pygmyMarmosetScore(forest1)).toBe(0)
        expect(pygmyMarmosetScore(forest2)).toBe(1)
        expect(pygmyMarmosetScore(forest3)).toBe(1)
        expect(pygmyMarmosetScore(forest4)).toBe(3)
    })

    test('scoreAnimals', () => {
        const forest:Tree[] = [{trunk:[trunkId], canopy:canopyId}]
        const zoo1:number[] = []
        expect(scoreAnimals(zoo1, forest)).toBe(0)
        expect(scoreAnimals([...boaCouple, ...kinkajouCouple, ...jaguarCouple], forest)).toBe(12)
    })
})