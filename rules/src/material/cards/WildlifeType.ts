import cards from "."
import Animal from "./Animal"
import CardType from "./CardType"
import Wildlife from "./Wildlife"

enum WildlifeType {
    Mating=1, Active
}

export default WildlifeType

export function matingScore(card:Wildlife, animals:number[]):number{
    return animals.filter(a => {
        const animal = cards[a]
        return animal.type === CardType.Wildlife && animal.animal === card.animal
    }).length === 1 ? 2 : card.animal === Animal.Jaguar ? 4 : 5
}