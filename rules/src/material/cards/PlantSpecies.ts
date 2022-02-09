enum PlantSpecies {
  Fern=1, Bromelia, Monstera, CoincapFungi, Lianas, Orchid, PitcherPlant
}

export default PlantSpecies

const MONSTERA_COUNT_TRIGGER = 3
const MONSTER_SCORE = 8
export function scoreMonsteras(monsteraCount:number):number{
  return monsteraCount >= MONSTERA_COUNT_TRIGGER ? MONSTER_SCORE : 0
}

const FERN_SCORE = 2
export function scoreFerns(fernCount:number):number{
  return fernCount%2 === 0 ? 0 : FERN_SCORE * fernCount
}

const BROMELIA_SCORE_FOR_ONE = 2
const BROMELIA_SCORE_FOR_TWO = 7
const BROMELIA_PENALTY_SCORE = -3
export function scoreBromelias(bromeliaCount:number):number{
  switch(bromeliaCount){
    case 0: return 0
    case 1: return BROMELIA_SCORE_FOR_ONE
    case 2: return BROMELIA_SCORE_FOR_TWO
    default: return BROMELIA_PENALTY_SCORE
  }
}

const LIANA_SCORE = 1
export function scoreLianas(lianaCount:number, canopyCount:number):number{
  return lianaCount * canopyCount * LIANA_SCORE
}

const ORCHID_SCORE = 4
export function scoreOrchids(orchidCount:number):number{
  return orchidCount * ORCHID_SCORE
}

const COINCAP_FUNGUS_COUNT = 1
export function scoreCoinCapFungi(coinCapFungusCount:number):number{
  return coinCapFungusCount * COINCAP_FUNGUS_COUNT
}