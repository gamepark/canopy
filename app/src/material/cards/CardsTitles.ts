import Card from '@gamepark/canopy/material/Card'
import {
  SeasonOfCleansing, SeasonOfDanger, SeasonOfDiversity, SeasonOfFecundity, SeasonOfHunting, SeasonOfLeaves, SeasonOfMating, SeasonOfRot, SeasonOfSky, SeasonOfStature, SeasonOfSymbiotes,
  StartTrunk,
  sTrunk0, sTrunk1, sTrunk2,sCanopy0, sCanopy1, sCanopy2, sFern, sBromelia, sMonstera, sRain, sSun,
  rTrunk0, rTrunk1, rTrunk2, rCanopy0, rCanopy1, rCanopy2, rFern, rBromelia, rMonstera, Seed, rRain, rSun, Drought, Disease, Fire,
  ActiveWildlife_EmeraldBoa, ActiveWildlife_Kinkajou, ActiveWildlife_LeafcutterAnts, ActiveWildlife_PoisonDartFrog, ActiveWildlife_Sloth, ActiveWildlife_Toucan,
  MatingPair_EmeraldBoa, MatingPair_Kinkajou, MatingPair_LeafcutterAnts, MatingPair_PoisonDartFrog, MatingPair_Sloth, MatingPair_Toucan,
  CoincapFungi, Lianas, Orchid, PitcherPlant, Lightning, Blight,
  ActiveWildlife_GoldenLionTamarin, ActiveWildlife_GoliathBirdEater, ActiveWildlife_HarmoniaMantle, ActiveWildlife_Hoatzin, ActiveWildlife_HowlerMonkey, ActiveWildlife_Jaguar, ActiveWildlife_PygmyMarmoset,
  MatingPair_GoldenLionTamarin, MatingPair_GoliathBirdEater, MatingPair_Hoatzin, MatingPair_HowlerMonkey, MatingPair_Jaguar
} from '@gamepark/canopy/material/Cards'
import {TFunction} from 'i18next'

const CardsTitles = new Map<Card, (t: TFunction) => string>()

CardsTitles.set(SeasonOfCleansing, (t: TFunction) => t('Season of Cleansing'))
CardsTitles.set(SeasonOfDanger, (t: TFunction) => t('Season of Danger'))
CardsTitles.set(SeasonOfDiversity, (t: TFunction) => t('Season of Diversity'))
CardsTitles.set(SeasonOfFecundity, (t: TFunction) => t('Season of Fecundity'))
CardsTitles.set(SeasonOfHunting, (t: TFunction) => t('Season of Hunting'))
CardsTitles.set(SeasonOfLeaves, (t: TFunction) => t('Season of Leaves'))
CardsTitles.set(SeasonOfMating, (t: TFunction) => t('Season of Mating'))
CardsTitles.set(SeasonOfRot, (t: TFunction) => t('Season of Rot'))
CardsTitles.set(SeasonOfSky, (t: TFunction) => t('Season of Sky'))
CardsTitles.set(SeasonOfStature, (t: TFunction) => t('Season of Stature'))
CardsTitles.set(SeasonOfSymbiotes, (t: TFunction) => t('Season of Symbiotes'))
CardsTitles.set(StartTrunk, (t: TFunction) => t('Starting Trunk'))
CardsTitles.set(sTrunk0, (t: TFunction) => t('Trunk'))
CardsTitles.set(sTrunk1, (t: TFunction) => t('Trunk'))
CardsTitles.set(sTrunk2, (t: TFunction) => t('Trunk'))
CardsTitles.set(sCanopy0, (t: TFunction) => t('Canopy'))
CardsTitles.set(sCanopy1, (t: TFunction) => t('Canopy'))
CardsTitles.set(sCanopy2, (t: TFunction) => t('Canopy'))
CardsTitles.set(sFern, (t: TFunction) => t('Fern'))
CardsTitles.set(sBromelia, (t: TFunction) => t('Bromelia'))
CardsTitles.set(sMonstera, (t: TFunction) => t('Monstera'))
CardsTitles.set(sRain, (t: TFunction) => t('Rain'))
CardsTitles.set(sSun, (t: TFunction) => t('Sun'))
CardsTitles.set(rTrunk0, (t: TFunction) => t('Trunk'))
CardsTitles.set(rTrunk1, (t: TFunction) => t('Trunk'))
CardsTitles.set(rTrunk2, (t: TFunction) => t('Trunk'))
CardsTitles.set(rCanopy0, (t: TFunction) => t('Canopy'))
CardsTitles.set(rCanopy1, (t: TFunction) => t('Canopy'))
CardsTitles.set(rCanopy2, (t: TFunction) => t('Canopy'))
CardsTitles.set(rFern, (t: TFunction) => t('Fern'))
CardsTitles.set(rBromelia, (t: TFunction) => t('Bromelia'))
CardsTitles.set(rMonstera, (t: TFunction) => t('Monstera'))
CardsTitles.set(rRain, (t: TFunction) => t('Rain'))
CardsTitles.set(rSun, (t: TFunction) => t('Sun'))
CardsTitles.set(Seed, (t: TFunction) => t('Seed'))
CardsTitles.set(Drought, (t: TFunction) => t('Drought'))
CardsTitles.set(Disease, (t: TFunction) => t('Disease'))
CardsTitles.set(Fire, (t: TFunction) => t('Fire'))
CardsTitles.set(ActiveWildlife_EmeraldBoa, (t: TFunction) => t('Emerald Boa'))
CardsTitles.set(ActiveWildlife_Kinkajou, (t: TFunction) => t('Kinkajou'))
CardsTitles.set(ActiveWildlife_LeafcutterAnts, (t: TFunction) => t('Leafcutter Ants'))
CardsTitles.set(ActiveWildlife_PoisonDartFrog, (t: TFunction) => t('Poison Dart Frog'))
CardsTitles.set(ActiveWildlife_Sloth, (t: TFunction) => t('Sloth'))
CardsTitles.set(ActiveWildlife_Toucan, (t: TFunction) => t('Toucan'))
CardsTitles.set(MatingPair_EmeraldBoa, (t: TFunction) => t('Emerald Boa'))
CardsTitles.set(MatingPair_Kinkajou, (t: TFunction) => t('Kinkajou'))
CardsTitles.set(MatingPair_LeafcutterAnts, (t: TFunction) => t('Leafcutter Ants'))
CardsTitles.set(MatingPair_PoisonDartFrog, (t: TFunction) => t('Poison Dart Frog'))
CardsTitles.set(MatingPair_Sloth, (t: TFunction) => t('Sloth'))
CardsTitles.set(MatingPair_Toucan, (t: TFunction) => t('Toucan'))
CardsTitles.set(CoincapFungi, (t: TFunction) => t('Coincap Fungi'))
CardsTitles.set(Lianas, (t: TFunction) => t('Lianas'))
CardsTitles.set(Orchid, (t: TFunction) => t('Orchid'))
CardsTitles.set(PitcherPlant, (t: TFunction) => t('Pitcher Plant'))
CardsTitles.set(Lightning, (t: TFunction) => t('Lightning'))
CardsTitles.set(Blight, (t: TFunction) => t('Blight'))
CardsTitles.set(ActiveWildlife_GoldenLionTamarin, (t: TFunction) => t('Golden Lion Tamarin'))
CardsTitles.set(ActiveWildlife_GoliathBirdEater, (t: TFunction) => t('Goliath Birdeater'))
CardsTitles.set(ActiveWildlife_HarmoniaMantle, (t: TFunction) => t('Harmonia Mantle'))
CardsTitles.set(ActiveWildlife_Hoatzin, (t: TFunction) => t('Hoatzin'))
CardsTitles.set(ActiveWildlife_HowlerMonkey, (t: TFunction) => t('Howler Monkey'))
CardsTitles.set(ActiveWildlife_Jaguar, (t: TFunction) => t('Jaguar'))
CardsTitles.set(ActiveWildlife_PygmyMarmoset, (t: TFunction) => t('Pygmy Marmoset'))
CardsTitles.set(MatingPair_GoldenLionTamarin, (t: TFunction) => t('Golden Lion Tamarin'))
CardsTitles.set(MatingPair_GoliathBirdEater, (t: TFunction) => t('Goliath Birdeater'))
CardsTitles.set(MatingPair_Hoatzin, (t: TFunction) => t('Hoatzin'))
CardsTitles.set(MatingPair_HowlerMonkey, (t: TFunction) => t('Howler Monkey'))
CardsTitles.set(MatingPair_Jaguar, (t: TFunction) => t('Jaguar'))

export default CardsTitles