import {dealCardInView} from '@gamepark/canopy/moves/DealCard'
import { drawOneFromSeasonDeckInView } from '@gamepark/canopy/moves/DrawOneFromSeasonDeck'
import {lookAtNewGrowthPileInView} from '@gamepark/canopy/moves/LookAtNewGrowthPile'
import MoveType from '@gamepark/canopy/moves/MoveType'
import MoveView from '@gamepark/canopy/moves/MoveView'
import { nextEndSeasonStep } from '@gamepark/canopy/moves/NextEndSeasonStep'
import {passOnPile} from '@gamepark/canopy/moves/PassOnPile'
import { playAbility } from '@gamepark/canopy/moves/PlayAbility'
import {playCard} from '@gamepark/canopy/moves/PlayCard'
import {setActivePlayer} from '@gamepark/canopy/moves/SetActivePlayer'
import GameView from '@gamepark/canopy/state/GameView'
import {Game} from '@gamepark/rules-api'

/**
 * This class is useful when the game has "IncompleteInformation" (or "SecretInformation").
 * It allows to handle, in a different way than the backend side, the moves that involve hidden information.
 */
export default class CanopyView implements Game<GameView, MoveView> {
  state: GameView

  constructor(state: GameView) {
    this.state = state
  }

  /**
   * This is where a move is reproduced on the browser of a player. Most move will be treated the exact same way on both server and client side,
   * however some moves, that involved hiding information or discovering hidden information, will receive a different treatment than in the main rules class.
   *
   * @param move The move that must be applied in the browser of the player or the spectator
   */
  play(move: MoveView): void {
    switch (move.type) {
      case MoveType.DealCard:
        return dealCardInView(this.state, move.pile)
      case MoveType.SetActivePlayer:
        return setActivePlayer(this.state, move)
      case MoveType.LookAtNewGrowthPile:
        return lookAtNewGrowthPileInView(this.state, move)
      case MoveType.PlayCard:
        return playCard(this.state, move)
      case MoveType.PassOnPile:
        return passOnPile(this.state)
      case MoveType.DrawOneFromSeasonDeck:
        return drawOneFromSeasonDeckInView(this.state, move)
      case MoveType.NextEndSeasonStep:
        return nextEndSeasonStep(this.state)
      case MoveType.PlayAbility:
        return playAbility(this.state, move)
    }
  }

  /**
   * In this method, inside the view, we must return any move that the frontend can fully anticipate.
   * The reason why it should be anticipated instead of waiting for the backend to provide with all the automatic consequences is latency.
   * If the backend takes time to reply, maybe we will have the reply while we are animating the first consequences. The player won't notice the latency!
   *
   * @return A MoveView which can be completely anticipated by the player or the spectator
   */
  getAutomaticMove(): void | MoveView {
    return
  }
}