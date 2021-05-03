/** @jsxImportSource @emotion/react */
import {css, keyframes} from '@emotion/react'
import GameView from '@gamepark/canopy/state/GameView'
import {Hand, Letterbox} from '@gamepark/react-components'
import Card from './material/Card'

type Props = {
  game: GameView
}

export default function GameDisplay({game}: Props) {
  return (
    <Letterbox css={letterBoxStyle} top={0}>
      <Card/>
      <Hand><Card/><Card/></Hand>
      <div css={css`position: absolute;
        top: 50%;
        left: 50%; 
        transform: translate(-50%, -50%);
        font-size: 3rem;`}>
        {JSON.stringify(game)}
      </div>
    </Letterbox>
  )
}

const fadeIn = keyframes`
  from, 50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const letterBoxStyle = css`
  animation: ${fadeIn} 3s ease-in forwards;
`