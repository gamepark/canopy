enum MoveType {
  DealCard=1,
  SetActivePlayer, 
  LookAtNewGrowthPile, 
  DrawOneFromSeasonDeck, 
  PlayCard, 
  PassOnPile, 
  NextEndSeasonStep, 
  PlayAbility, 
  DealPlayerSeedsCards,
  DiscardSeedsCards,
  ScoreTrees,
  ScorePlantsAndWeather,
  CleanUp,
  EndGameScores,
}

export default MoveType