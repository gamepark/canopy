import cards from "."
import Tree from "../../state/Tree"
import CardType from "./CardType"
import WildlifeType, { matingScore } from "./WildlifeType"

enum Animal {
  EmeraldBoa=1, Kinkajou, LeafcutterAnts, PoisonDartFrog, Sloth, Toucan,
  GoldenLionTamarin, GoliathBirdEater, HarmoniaMantle, Hoatzin, HowlerMonkey, Jaguar, PygmyMarmoset
}

export default Animal

export const MATING_SOLO_SCORE = 2
export const MATING_DUO_SCORE = 5
export const MATING_DUO_JAGUAR_SCORE = 4
export const ACTIVE_EMERALD_BOA_SCORE = -1
export const ACTIVE_KINKAJOU_SCORE = 2
export const ACTIVE_LEAFCUTTER_ANT_SCORE = 0
export const ACTIVE_POISON_DART_FROG_SCORE = 2
export const ACTIVE_SLOTH_SCORE = 2
export const ACTIVE_TOUCAN_SCORE = 1
export const ACTIVE_GOLDEN_LION_TAMARIN_SCORE = 0
export const ACTIVE_GOLIATH_BIRD_EATER_SCORE = 2
export const ACTIVE_HARMONIA_MANTLE_SCORE = 0
export const ACTIVE_HOATZIN_SCORE = 2
export const ACTIVE_HOWLER_MONKEY = 1
export const ACTIVE_JAGUAR_SCORE = -3
export function scoreAnimals(animals:number[], trees:Tree[]):number{
  let result:number = 0
  animals.forEach(animal => {
      const card = cards[animal]

      if(card.type !== CardType.Wildlife) return console.error("Error Score Animal : trying to score a non animal card !")
      const isMatingType = card.wildlifeType === WildlifeType.Mating
      switch(card.animal){
          case Animal.EmeraldBoa:
              result += isMatingType ? matingScore(card, animals) : ACTIVE_EMERALD_BOA_SCORE
              break
          case Animal.Kinkajou:
              result += isMatingType ? matingScore(card, animals) : ACTIVE_KINKAJOU_SCORE
              break
          case Animal.LeafcutterAnts:
              result += isMatingType ? matingScore(card, animals) : ACTIVE_LEAFCUTTER_ANT_SCORE
              break
          case Animal.PoisonDartFrog:
              result += isMatingType ? matingScore(card, animals) : ACTIVE_POISON_DART_FROG_SCORE
              break
          case Animal.Sloth:
              result += isMatingType ? matingScore(card, animals) : ACTIVE_SLOTH_SCORE
              break
          case Animal.Toucan:
              result += isMatingType ? matingScore(card, animals) : ACTIVE_TOUCAN_SCORE
              break
          case Animal.GoldenLionTamarin :
              result += isMatingType ? matingScore(card, animals) : ACTIVE_GOLDEN_LION_TAMARIN_SCORE
              break
          case Animal.GoliathBirdEater:
              result += isMatingType ? matingScore(card, animals) : ACTIVE_GOLIATH_BIRD_EATER_SCORE
              break
          case Animal.HarmoniaMantle:
              result += isMatingType ? matingScore(card, animals) : ACTIVE_HARMONIA_MANTLE_SCORE
              break
          case Animal.Hoatzin:
              result += isMatingType ? matingScore(card, animals) : ACTIVE_HOATZIN_SCORE
              break
          case Animal.HowlerMonkey:
              result += isMatingType ? matingScore(card, animals) : ACTIVE_HOWLER_MONKEY
              break
          case Animal.Jaguar:
              result += isMatingType ? matingScore(card, animals) : ACTIVE_JAGUAR_SCORE
              break
          case Animal.PygmyMarmoset:
              result += isMatingType ? matingScore(card, animals) : pygmyMarmosetScore(trees)
              break
      }
  })
  return result
}

export function pygmyMarmosetScore(trees:Tree[]):number{
  return [...new Set(trees.filter(t => t.canopy !== undefined).map(t => t.trunk.length))].length
}