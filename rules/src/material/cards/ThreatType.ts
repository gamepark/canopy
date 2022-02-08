enum ThreatType {
  Drought=1, Disease, Fire, Lightning, Blight
}

export default ThreatType

export function howManyCardsDiscardedByThreat(threatCount:number, threat:ThreatType):number{
  switch(threat){
    case ThreatType.Fire:
    case ThreatType.Disease:
    {
      if(threatCount <2) return 0
      else if(threatCount <3) return 2
      else return 1
    }
    case ThreatType.Blight:
      return threatCount
    case ThreatType.Drought:
      return 1
    case ThreatType.Lightning:
      return 2
  }
}