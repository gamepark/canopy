enum PlantsCard {
    Philodendron = 'Philodendron',
    Bromelia = 'Bromelia',
    Ferns = 'Ferns',
    Seeds = 'Seeds'
  }
  
  export default PlantsCard
  
  export const plantsCards = Object.values(PlantsCard) as PlantsCard[]
  
  export function isPlantsCard(item: any): item is PlantsCard {
    return plantsCards.indexOf(item) !== -1
  }