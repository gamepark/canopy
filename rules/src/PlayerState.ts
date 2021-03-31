import Wildlife from './Wildlife';

export default interface PlayerState {
  trees: number[][]
  plants: number[]
  weather: number[]
  threats: number[]
  wildlife: Wildlife[]
}