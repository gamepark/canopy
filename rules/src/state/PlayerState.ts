import Ability from './Ability'
import Tree from './Tree'

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

export function initPlayerState(id: number): PlayerState {
  return {hand: [], trees: [{trunk: [id]}], plants: [], seeds: [], weather: [], threats: [], wildlife: [], abilities: [], score: 0}
}