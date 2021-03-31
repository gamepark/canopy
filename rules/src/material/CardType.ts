enum CardType {
    SeedsCard = 'SeedsCard', RainforestCard = 'RainforestCard'
  }
  
  export default CardType
  
  export const cardTypes = Object.values(CardType) as CardType[]
  
  export function isCardType(item: any): item is CardType {
    return cardTypes.indexOf(item) !== -1
  }