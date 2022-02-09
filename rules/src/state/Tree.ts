import cards from "../material/cards"
import Card from "../material/cards/Card"
import CardType from "../material/cards/CardType"

type Tree = {
  trunk: number[]
  canopy?: number
  score?: boolean
  reward?: number
}

export default Tree

export function scoreTrunk(tree: Tree) {
  return (tree.trunk.map(t => {
    const card = cards[t]
    return card.type === CardType.Trunk ? card.value : 0
  })).reduce(((pv,cv) => pv + cv),0)
}

export function scoreCanopy(tree:Tree):number{
  if(!tree.canopy || tree.trunk.length === 0) {
    console.error("error in ScoreCanopy : tree has not canopy or tree length is null !")
    return -1
  }
  const canopy:Card=cards[tree.canopy]
  if(canopy.type !== CardType.Canopy) {
    console.error("error in ScoreCanopy : card in canopy prop is not a canopy !")
    return -2
  }
  return canopy.value * tree.trunk.length
}