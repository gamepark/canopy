/** @jsxImportSource @emotion/react */
import GameView from '@gamepark/canopy/state/GameView'
import {useTranslation} from 'react-i18next'

type Props = {
  loading: boolean
  game?: GameView
}

export default function HeaderText({loading, game}: Props) {
  const {t} = useTranslation()
  if (loading) return <>{t('Game loading...')}</>
  return <>Loaded! Now what? Active player is {game?.activePlayer}</>
}