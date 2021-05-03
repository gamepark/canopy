import {SecretInformation, SimultaneousGame} from '@gamepark/rules-api'
import shuffle from 'lodash.shuffle'
import {CanopyOptions, isGameOptions} from './CanopyOptions'
import cards, {getCardIds} from './material/cards'
import CardType from './material/cards/CardType'
import Deck from './material/cards/Deck'
import {dealCard, dealCardMove} from './moves/DealCard'
import {lookAtNewGrowthPile, lookAtNewGrowthPileMove} from './moves/LookAtNewGrowthPile'
import Move from './moves/Move'
import MoveType from './moves/MoveType'
import MoveView from './moves/MoveView'
import {passOnPile, passOnPileMove} from './moves/PassOnPile'
import {playCard, playCardMove} from './moves/PlayCard'
import {setActivePlayer, setActivePlayerMove} from './moves/SetActivePlayer'
import GameState from './state/GameState'
import GameView from './state/GameView'
import {initPlayerState} from './state/PlayerState'
import {hidePlayerHand} from './state/PlayerView'

/**
 * Rules for Canopy
 */
export default class Canopy extends SimultaneousGame<GameState, Move>
  implements SecretInformation<GameState, GameView, Move, MoveView> {
  /**
   * This constructor is called when the game "restarts" from a previously saved state.
   * @param state The state of the game
   */
  constructor(state: GameState)
  /**
   * This constructor is called when a new game is created. If your game has options, or a variable number of players, it will be provided here.
   * @param options The options of the new game
   */
  constructor(options: CanopyOptions)
  /**
   * In here you must code the construction of your class. Use a "typeguard" to distinguish a new game from a restored game.
   * @param arg The state of the game, or the options when starting a new game
   */
  constructor(arg: GameState | CanopyOptions) {
    if (isGameOptions(arg)) {
      // For now, exclude advanced card. Options will come later.
      const rainforestDeck = shuffle(getCardIds(card => card.deck === Deck.Rainforest && !card.advanced))
      const initialState: GameState = {
        players: arg.players.map((_, id) => initPlayerState(id)),
        season: 1,
        seedsDeck: shuffle(getCardIds(card => card.deck === Deck.Seed)),
        seasonPiles: [rainforestDeck.splice(rainforestDeck.length * 2 / 3), rainforestDeck.splice(rainforestDeck.length / 2), rainforestDeck],
        newGrowthPiles: [[], [], []]
      }
      super(initialState)
    } else {
      super(arg)
    }
  }

  /**
   * @return True when game is over
   */
  isOver(): boolean {
    return false // TODO
  }

  /**
   * Retrieves the player which must act. It is used to secure the game and prevent players from acting outside their turns.
   * Only required in a SequentialGame.
   * @return The identifier of the player whose turn it is
   */
  isActive(playerId: number): boolean {
    return this.state.activePlayer === playerId
  }

  /**
   * Return the exhaustive list of moves that can be played by the active player.
   * This is used for 2 features:
   * - security (preventing unauthorized moves from being played);
   * - "Dummy players": when a player leaves a game, it is replaced by a "Dummy" that plays random moves, allowing the other players to finish the game.
   * In a SimultaneousGame, as multiple players can be active you will be passed a playedId as an argument.
   * If the game allows a very large (or infinite) number of moves, instead of implementing this method, you can implement instead:
   * - isLegal(move: Move):boolean, for security; and
   * - A class that implements "Dummy" to provide a custom Dummy player.
   */
  getLegalMoves(playerId: number): Move[] {
    if (this.state.activePlayer !== playerId) return []
    const player = this.state.players[this.state.activePlayer]
    const moves: Move[] = []
    for (const cardId of player.hand) {
      const card = cards[cardId]
      switch (card.type) {
        case CardType.Trunk:
          player.trees.forEach((tree, treeId) => {
            if (tree.canopy === undefined) {
              moves.push(playCardMove(cardId, treeId)) // add trunk in existing tree without a Canopy
            }
          })
          moves.push(playCardMove(cardId, player.trees.length)) // start new tree
          break
        case CardType.Canopy:
          player.trees.forEach((tree, treeId) => {
            if (tree.canopy === undefined) {
              moves.push(playCardMove(cardId, treeId)) // add Canopy in existing tree without a Canopy
            }
          })
          break
        default:
          moves.push(playCardMove(cardId)) // add card into forest
      }
    }
    if (this.state.currentPile !== undefined) {
      // TODO: at the end of a season, "Passing on the final available pile is no longer an option."
      moves.push(passOnPileMove)
    }
    return moves
  }

  /**
   * This is the one and only play where you will update the game's state, depending on the move that has been played.
   *
   * @param move The move that should be applied to current state.
   */
  play(move: Move): void {
    switch (move.type) {
      case MoveType.DealCard:
        return dealCard(this.state, move.pile)
      case MoveType.SetActivePlayer:
        return setActivePlayer(this.state, move)
      case MoveType.LookAtNewGrowthPile:
        return lookAtNewGrowthPile(this.state)
      case MoveType.PlayCard:
        return playCard(this.state, move)
      case MoveType.PassOnPile:
        return passOnPile(this.state)
    }
  }

  /**
   * Here you can return the moves that should be automatically played when the game is in a specific state.
   * Here is an example from monopoly: you roll a dice, then move you pawn accordingly.
   * A first solution would be to do both state updates at once, in a "complex move" (RollDiceAndMovePawn).
   * However, this first solution won't allow you to animate step by step what happened: the roll, then the pawn movement.
   * "getAutomaticMove" is the solution to trigger multiple moves in a single action, and still allow for step by step animations.
   * => in that case, "RollDice" could set "pawnMovement = x" somewhere in the game state. Then getAutomaticMove will return "MovePawn" when
   * "pawnMovement" is defined in the state.
   * Of course, you must return nothing once all the consequences triggered by a decision are completed.
   * VERY IMPORTANT: you should never change the game state in here. Indeed, getAutomaticMove will never be called in replays, for example.
   *
   * @return The next automatic consequence that should be played in current game state.
   */
  getAutomaticMove(): void | Move {
    if (this.isSeasonBeginning()) {
      for (let pile = 1; pile <= this.state.newGrowthPiles.length; pile++) {
        if (this.state.newGrowthPiles[pile - 1].length < pile) {
          return dealCardMove(pile)
        }
      }
      return setActivePlayerMove(this.getIdOfPlayerWithLowestScore())
    } else if (this.state.endOfSeason) {
      // TODO end of season rules
    }
    if (this.state.activePlayer === undefined) {
      return
    }
    if (this.state.addCardToPreviousPile) {
      return dealCardMove(this.state.currentPile! - 1)
    }
    const activePlayer = this.state.players[this.state.activePlayer]
    if (activePlayer.hand.length === 0) {
      if (this.state.currentPile !== undefined) {
        if (this.state.currentPile > 3) {
          // TODO: draw one card from current season deck
        } else if (this.state.newGrowthPiles[this.state.currentPile - 1].length > 0) {
          return lookAtNewGrowthPileMove
        } else {
          return passOnPileMove // Pass empty piles at the end of season
        }
      } else if (this.state.seasonPiles[this.state.season - 1].length > 0) {
        for (let pile = 1; pile <= this.state.newGrowthPiles.length; pile++) {
          if (this.state.newGrowthPiles[pile - 1].length === 0) {
            return dealCardMove(pile)
          }
        }
      }
      return setActivePlayerMove((this.state.activePlayer + 1) % this.state.players.length)
    }
    return
  }

  isSeasonBeginning(): boolean {
    return this.state.activePlayer === undefined && this.state.seasonPiles[this.state.season - 1].length > 0
  }

  getIdOfPlayerWithLowestScore(): number {
    let id = 0
    for (let i = 1; i < this.state.players.length; i++) {
      if (this.state.players[i].score < this.state.players[id].score) {
        id = i
      }
    }
    return id
  }

  /**
   * If you game has incomplete information, you must hide some of the game's state to the players and spectators.
   * @return What a person can see from the game state
   */
  getView(playerId?: number): GameView {
    return {
      ...this.state,
      seedsDeck: this.state.seedsDeck.length,
      seasonPiles: this.state.seasonPiles.map(deck => deck.length),
      newGrowthPiles: this.state.newGrowthPiles.map(deck => deck.length),
      players: this.state.players.map((player, id) => id === playerId ? player : hidePlayerHand(player))
    }
  }

  /**
   * If you game has "SecretInformation", you must also implement "getPlayerView", returning the information visible by a specific player.
   * @param playerId Identifier of the player
   * @return what the player can see
   */
  getPlayerView(playerId: number): GameView {
    return this.getView(playerId)
  }

  /**
   * If you game has incomplete information, sometime you need to alter a Move before it is sent to the players and spectator.
   * For example, if a card is revealed, the id of the revealed card should be ADDED to the Move in the MoveView
   * Sometime, you will hide information: for example if a player secretly choose a card, you will hide the card to the other players or spectators.
   *
   * @param move The move that has been played
   * @return What a person should know about the move that was played
   */
  getMoveView(move: Move): MoveView {
    return move
  }

  /**
   * If you game has secret information, sometime you need to alter a Move depending on which player it is.
   * For example, if a card is drawn, the id of the revealed card should be ADDED to the Move in the MoveView, but only for the played that draws!
   * Sometime, you will hide information: for example if a player secretly choose a card, you will hide the card to the other players or spectators.
   *
   * @param move The move that has been played
   * @param playerId Identifier of the player seeing the move
   * @return What a person should know about the move that was played
   */
  getPlayerMoveView(move: Move, playerId: number): MoveView {
    switch (move.type) {
      case MoveType.LookAtNewGrowthPile: {
        if (this.state.activePlayer === playerId) {
          const player = this.state.players[playerId]
          return {...move, cards: player.hand}
        } else {
          return move
        }
      }
      default:
        return this.getMoveView(move)
    }
  }
}