/** @jsxImportSource @emotion/react */
import {css, keyframes, useTheme} from '@emotion/react'
import Player from '@gamepark/its-a-wonderful-world/Player'
import PlayerView from '@gamepark/its-a-wonderful-world/PlayerView'
import {Fragment, FunctionComponent} from 'react'
import {useTranslation} from 'react-i18next'
import {LightTheme} from '../../Theme'
import DownArrowIcon from '../../util/DownArrowIcon'
import {headerHeight, playerPanelHeight, playerPanelMargin} from '../../util/Styles'
import UpArrowIcon from '../../util/UpArrowIcon'

const DraftDirectionIndicator: FunctionComponent<{ clockwise: boolean, players: (Player | PlayerView)[] }> = ({clockwise, players}) => {
  const {t} = useTranslation()
  const theme = useTheme()
  const greenColor = theme.color === LightTheme ? 'forestgreen' : 'lightgreen'
  const purpleColor = theme.color === LightTheme ? 'purple' : 'lightpink'
  return (
    <Fragment>
      {players.slice(1).map((_, index) => clockwise ?
        <DescendingArrows key={index} color={greenColor} css={css`top: ${headerHeight + (index + 1) * (playerPanelHeight + playerPanelMargin)}%;`}
                          title={t('Draft direction')}/> :
        <AscendingArrows key={index} color={purpleColor} css={css`top: ${25.2 + index * 18}%;`}
                         title={t('Draft direction')}/>
      )}
    </Fragment>
  )
}

const DescendingArrows: FunctionComponent<React.HTMLAttributes<HTMLDivElement> & { color: string }> = ({color, ...props}) => (
  <div css={[slider, scrollDownAnimation]} {...props}>
    <div>
      <DownArrowIcon fill={color} style={{top: 0}}/>
      <DownArrowIcon fill={color} style={{top: '25%'}}/>
      <DownArrowIcon fill={color} style={{top: '50%'}}/>
      <DownArrowIcon fill={color} style={{top: '75%'}}/>
      <DownArrowIcon fill={color} style={{top: '100%'}}/>
    </div>
  </div>
)

const AscendingArrows: FunctionComponent<React.HTMLAttributes<HTMLDivElement> & { color: string }> = ({color, ...props}) => (
  <div css={[slider, scrollUpAnimation]} {...props}>
    <div>
      <UpArrowIcon fill={color} style={{top: 0}}/>
      <UpArrowIcon fill={color} style={{top: '25%'}}/>
      <UpArrowIcon fill={color} style={{top: '50%'}}/>
      <UpArrowIcon fill={color} style={{top: '75%'}}/>
      <UpArrowIcon fill={color} style={{top: '100%'}}/>
    </div>
  </div>
)

const slider = css`
  position: absolute;
  right: 9%;
  width: 3%;
  height: 2%;
  overflow: hidden;

  & > * {
    width: 100%;
    height: 200%;

    & > svg {
      position: absolute;
      width: 100%;
      transform: translateY(-50%);
    }
  }
`

export const scrollDown = keyframes`
  from {
    transform: translateY(-50%);
  }
  to {
    transform: translateY(0%);
  }
`

const scrollDownAnimation = css`
  & > * {
    animation: ${scrollDown} 2s linear infinite;
  }
`

export const scrollUp = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-50%);
  }
`

const scrollUpAnimation = css`
  & > * {
    animation: ${scrollUp} 2s linear infinite;
  }
`

export default DraftDirectionIndicator