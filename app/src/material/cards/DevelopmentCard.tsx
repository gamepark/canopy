/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
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
import {forwardRef} from 'react'
import {useTranslation} from 'react-i18next'
import Images from '../Images'
import CardsTitles from './CardsTitles'

type Props = { card?: Card } & React.HTMLAttributes<HTMLDivElement>

const Card = forwardRef<HTMLDivElement, Props>(({card, ...props}, ref) => {
  const {t} = useTranslation()
  return (
    <div ref={ref} {...props} css={[style, !card && hidden]}>
      <div css={[frontFace, getBackgroundImage(card)]}>
        {card && <h3 css={cardTitle}>{CardsTitles.get(card)!(t)}</h3>}
      </div>
    </div>
  )
})

const style = css`
  height: 100%;
  border-radius: 6% / ${65 / 100 * 6}%;
  box-shadow: 0 0 5px black;
  transform-style: preserve-3d;
  transform: translateZ(0);
  -webkit-font-smoothing: subpixel-antialiased;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 6% / ${65 / 100 * 6}%;
    background-image: url(${Images.developmentBack});
    background-size: cover;
    transform: rotateY(180deg);
    backface-visibility: hidden;
  }
`

const hidden = css`
  transform: rotateY(180deg);
`

const frontFace = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-size: cover;
  border-radius: 6% / ${65 / 100 * 6}%;
`

const getBackgroundImage = (card?: Card) => css`
  image-rendering: -webkit-optimize-contrast;
  background-image: url(${card ? images.get(card) : Images.developmentBack});
`

export const cardTitleFontSize = 0.9

const cardTitle = css`
  position: absolute;
  top: 1.4%;
  left: 19%;
  width: 68%;
  text-align: center;
  color: #EEE;
  font-size: ${cardTitleFontSize}em;
  font-weight: lighter;
  text-shadow: 0 0 0.3em #000, 0 0 0.3em #000;
  text-transform: uppercase;
`
const images = new Map<Card, any>()

images.set(SeasonOfCleansing, Images.seasonOfCleansing)
images.set(SeasonOfDanger, Images.seasonOfDanger)
images.set(SeasonOfDiversity, Images.seasonOfDiversity)
images.set(SeasonOfFecundity, Images.seasonOfFecundity)
images.set(SeasonOfHunting, Images.seasonOfHunting)
images.set(SeasonOfLeaves, Images.seasonOfLeaves)
images.set(SeasonOfMating, Images.seasonOfMating)
images.set(SeasonOfRot, Images.seasonOfRot)
images.set(SeasonOfSky, Images.seasonOfSky)
images.set(SeasonOfStature, Images.seasonOfStature)
images.set(SeasonOfSymbiotes, Images.seasonOfSymbiotes)
images.set(StartTrunk, Images.startingTrunk)
images.set(sBromelia, Images.sBromelia)
images.set(sCanopy0, Images.sCanopy01)
images.set(sCanopy1, Images.sCanopy11)
images.set(sCanopy2, Images.sCanopy21)
images.set(sFern, Images.sFern)
images.set(sMonstera, Images.sMonstera)
images.set(sRain, Images.sRain)
images.set(sSun, Images.sSun)
images.set(sTrunk0, Images.sTrunk01)
images.set(sTrunk1, Images.sTrunk11/Images.sTrunk12)
images.set(sTrunk2, Images.sTrunk21/Images.sTrunk22)
images.set(rBromelia, Images.bromelia)
images.set(rCanopy0, Images.canopy01/Images.canopy02/Images.canopy03)
images.set(rCanopy1, Images.canopy11/Images.canopy12/Images.canopy13/Images.canopy14/Images.canopy15/Images.canopy16)
images.set(rCanopy2, Images.canopy21/Images.canopy22)
images.set(rFern, Images.fern)
images.set(rMonstera, Images.monstera)
images.set(rRain, Images.rain)
images.set(rSun, Images.sun)
images.set(rTrunk0, Images.trunk01/Images.trunk02/Images.trunk03/Images.trunk04/Images.trunk05)
images.set(rTrunk1, Images.trunk11/Images.trunk12/Images.trunk13/Images.trunk14/Images.trunk15/Images.trunk16/Images.trunk17/Images.trunk18)
images.set(rTrunk2, Images.trunk21/Images.trunk22/Images.trunk23/Images.trunk24/Images.trunk25)
images.set(Seed, Images.seed)
images.set(Drought, Images.drought)
images.set(Disease, Images.disease)
images.set(Fire, Images.fire)
images.set(ActiveWildlife_EmeraldBoa, Images.emeraldTreeBoaWL)
images.set(ActiveWildlife_GoldenLionTamarin, Images.goldenLionTamarinWL)
images.set(ActiveWildlife_GoliathBirdEater, Images.goliathBirdEaterWL)
images.set(ActiveWildlife_HarmoniaMantle, Images.harmoniaMantleWL1/Images.harmoniaMantleWL2)
images.set(ActiveWildlife_Hoatzin, Images.hoatzinWL)
images.set(ActiveWildlife_HowlerMonkey, Images.howlerMonkeyWL)
images.set(ActiveWildlife_Jaguar, Images.jaguarWL)
images.set(ActiveWildlife_Kinkajou, Images.kinkajouWL)
images.set(ActiveWildlife_LeafcutterAnts, Images.leafCutterAntsWL)
images.set(ActiveWildlife_PoisonDartFrog, Images.poisonDartFrogWL)
images.set(ActiveWildlife_PygmyMarmoset, Images.pygmyMarmosetWL1/Images.pygmyMarmosetWL2)
images.set(ActiveWildlife_Sloth, Images.slothWL)
images.set(ActiveWildlife_Toucan, Images.toucanWL)
images.set(MatingPair_EmeraldBoa, Images.emeraldTreeBoaMP)
images.set(MatingPair_GoldenLionTamarin, Images.goldenLionTamarinMP)
images.set(MatingPair_GoliathBirdEater, Images.goliathBirdEaterMP)
images.set(MatingPair_Hoatzin, Images.hoatzinMP)
images.set(MatingPair_HowlerMonkey, Images.howlerMonkeyMP)
images.set(MatingPair_Jaguar, Images.jaguarMP)
images.set(MatingPair_Kinkajou, Images.kinkajouMP)
images.set(MatingPair_LeafcutterAnts, Images.leafCutterAntsMP)
images.set(MatingPair_PoisonDartFrog, Images.poisonDartFrogMP)
images.set(MatingPair_Sloth, Images.slothMP)
images.set(MatingPair_Toucan, Images.toucanMP)
images.set(CoincapFungi, Images.coincapFungi)
images.set(Lianas, Images.lianas)
images.set(Orchid, Images.orchid)
images.set(PitcherPlant, Images.pitcherPlant)
images.set(Lightning, Images.lightning)
images.set(Blight, Images.blight)

export default DevelopmentCard