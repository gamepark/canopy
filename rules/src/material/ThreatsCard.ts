enum ThreatsCard {
    Fire = 'Fire',
    Drought = 'Drought',
    Disease = 'Disease'
}
  
export default ThreatsCard

export const threatsCards = Object.values(ThreatsCard) as ThreatsCard[]

export function isThreatsCard(item: any): item is ThreatsCard {
  return threatsCards.indexOf(item) !== -1
}
