import Ability from './Ability'
import Tree from './Tree'
import Animal from '../material/cards/Animal'
import PlayerView from './PlayerView'

type PlayerState = {
  hand: number[]
  trees: Tree[]
  plants: number[]
  seeds: number[]
  weather: number[]
  threats: number[]
  wildlife: number[]
  abilities: Ability[]
  score: number
}

export default PlayerState

export function initPlayerState(index: number): PlayerState {
  return {hand: [], trees: [{trunk: [index]}], plants: [], seeds: [], weather: [], threats: [], wildlife: [], abilities: [], score: 0}
}

export function hasAnimalAmongWildlife(player:PlayerState|PlayerView, animal:Animal):boolean{
  return player.wildlife.includes(animal)
}