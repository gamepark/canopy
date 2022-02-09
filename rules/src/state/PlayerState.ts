import Ability from './Ability'
import Tree from './Tree'
import Animal from '../material/cards/Animal'
import PlayerView from './PlayerView'
import ThreatType, { howManyCardsDiscardedByThreat } from '../material/cards/ThreatType'
import cards from '../material/cards'
import CardType from '../material/cards/CardType'

type PlayerState = {
  hand: number[]
  trees: Tree[]
  plants: number[]
  seeds: number[]
  weather: number[]
  threats: number[]
  wildlife: number[]
  abilities: Ability[]
  tempDiscard:number[]
  score: number
}

export default PlayerState

export function initPlayerState(index: number): PlayerState {
  return {hand: [], trees: [{trunk: [index]}], plants: [], seeds: [], weather: [], threats: [], wildlife: [], abilities: [], tempDiscard:[] ,score: 0}
}

export function hasAnimalAmongWildlife(player:PlayerState|PlayerView, animal:Animal):boolean{
  return player.wildlife.includes(animal)
}

export function hasActiveAnimalDuringEndSeason(player: PlayerState): boolean {
  return hasAnimalAmongWildlife(player, Animal.HarmoniaMantle) || (hasAnimalAmongWildlife(player, Animal.LeafcutterAnts) && player.abilities.find(a => a.animal === Animal.LeafcutterAnts)?.user !== true)
}

export function howManyPlayerHasThreatType(player:PlayerState|PlayerView, threat:ThreatType):number{
  return player.threats.filter(t => {
    const card = cards[t]
    return card.type === CardType.Threat && card.threat === threat
}).length
}

export function isEnoughCardsDiscarded(players:(PlayerState|PlayerView)[]):boolean{
  for(const player of players){
    const discardByFire:number = howManyCardsDiscardedByThreat(howManyPlayerHasThreatType(player, ThreatType.Fire), ThreatType.Fire)
    const discardByDisease:number = howManyCardsDiscardedByThreat(howManyPlayerHasThreatType(player, ThreatType.Disease), ThreatType.Disease)
    const discardByBlight:number = howManyCardsDiscardedByThreat(howManyPlayerHasThreatType(player, ThreatType.Blight), ThreatType.Blight)
    if(player.tempDiscard.filter(c => cards[c].type === CardType.Wildlife).length !== discardByFire 
    || player.tempDiscard.filter(c => cards[c].type === CardType.Plant).length !== discardByFire + discardByBlight){
      return false
    }
  }
  return true
}