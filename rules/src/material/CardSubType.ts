enum CardSubType {
    RootTrunk = 'RootTrunk',
    Canopy = 'Canopy',
    Plants = 'Plants',
    Weather = 'Weather',
    Threats = 'Threats',
    Wildlife = 'Wildlife'
  }
  
  export default CardSubType
  
  export const cardSubTypes = Object.values(CardSubType) as CardSubType[]
  
  export function isCardSubType(item: any): item is CardSubType {
    return cardSubTypes.indexOf(item) !== -1
  }