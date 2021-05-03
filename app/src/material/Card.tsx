/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import startingTrunk from './cards/startingTrunks/startingTrunk.jpg'

export default function Card() {
  return <div css={testCss}>BLABLABLA</div>
}

const testCss = css`
  position: absolute;
  top: 10%;
  left: 10%;
  height: 20%;
  width: 8%;
  background-image: url(${startingTrunk});
  background-size: cover;
  border-radius: 1em;
`
