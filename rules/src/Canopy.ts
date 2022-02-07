import {SecretInformation, SimultaneousGame} from '@gamepark/rules-api'
import shuffle from 'lodash.shuffle'
import {CanopyOptions, isGameOptions} from './CanopyOptions'
import cards, {getCardIds} from './material/cards'
import Animal from './material/cards/Animal'
import CardType from './material/cards/CardType'
import Deck from './material/cards/Deck'
import PlantSpecies from './material/cards/PlantSpecies'
import {dealCard, dealCardMove} from './moves/DealCard'
import { drawOneFromSeasonDeck, drawOneFromSeasonDeckMove } from './moves/DrawOneFromSeasonDeck'
import {lookAtNewGrowthPile, lookAtNewGrowthPileMove} from './moves/LookAtNewGrowthPile'
import Move from './moves/Move'
import MoveType from './moves/MoveType'
import MoveView from './moves/MoveView'
import { nextEndSeasonStep, nextEndSeasonStepMove } from './moves/NextEndSeasonStep'
import {passOnPile, passOnPileMove} from './moves/PassOnPile'
import { playAbility } from './moves/PlayAbility'
import {playCard, playCardMove} from './moves/PlayCard'
import {setActivePlayer, setActivePlayerMove} from './moves/SetActivePlayer'
import EndOfSeasonStep from './state/EndOfSeasonStep'
import GameState from './state/GameState'
import GameView from './state/GameView'
import {hasAnimalAmongWildlife, initPlayerState} from './state/PlayerState'
import {hidePlayerHand} from './state/PlayerView'

export default class Canopy extends SimultaneousGame<GameState, Move>
  implements SecretInformation<GameState, GameView, Move, MoveView> {
  constructor(state: GameState)
  constructor(options: CanopyOptions)
  constructor(arg: GameState | CanopyOptions) {
    if (isGameOptions(arg)) {
      // For now, exclude advanced card. Options will come later.
      const rainforestDeck = shuffle(getCardIds(card => card.deck === Deck.Rainforest && !card.advanced))
      const initialState: GameState = {
        players: [...new Array(arg.players)].map((_, index) => initPlayerState(index)),
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

  isOver(): boolean {
    return this.state.season > 3
  }

  isActive(playerId: number): boolean {
    return this.state.activePlayer === playerId && this.isOver() === false
  }

  getLegalMoves(playerId: number): Move[] {
    const moves: Move[] = []
    if(this.state.endOfSeason){
      const player = this.state.players[playerId-1]
      switch(this.state.endOfSeason){
        case EndOfSeasonStep.Wildlife:{
          if(player.abilities.find(a => (a.animal === Animal.LeafcutterAnts || a.animal === Animal.HarmoniaMantle) && a.user !== true)){
            if(player.abilities.find(a => a.animal === Animal.HarmoniaMantle && a.user !== true)){
              moves.push({type:MoveType.PlayAbility,ability:{animal:Animal.HarmoniaMantle,plant:PlantSpecies.Bromelia},playerId})
              moves.push({type:MoveType.PlayAbility,ability:{animal:Animal.HarmoniaMantle,plant:PlantSpecies.Fern},playerId})
              moves.push({type:MoveType.PlayAbility,ability:{animal:Animal.HarmoniaMantle,plant:PlantSpecies.Monstera},playerId})
              moves.push({type:MoveType.PlayAbility,ability:{animal:Animal.HarmoniaMantle,plant:undefined},playerId})
            }
            if(player.abilities.find(a => a.animal === Animal.LeafcutterAnts && a.user !== true)){
              player.plants.forEach(plant => {
                moves.push({type:MoveType.PlayAbility, ability:{animal:Animal.LeafcutterAnts,card:plant}, playerId})
              })
              player.seeds.forEach(seed => {
                moves.push({type:MoveType.PlayAbility, ability:{animal:Animal.LeafcutterAnts,card:seed}, playerId})
              })
              player.threats.forEach(threat => {
                moves.push({type:MoveType.PlayAbility, ability:{animal:Animal.LeafcutterAnts,card:threat}, playerId})
              })
              player.weather.forEach(w => {
                moves.push({type:MoveType.PlayAbility, ability:{animal:Animal.LeafcutterAnts,card:w}, playerId})
              })
              player.wildlife.forEach(animal => {
                moves.push({type:MoveType.PlayAbility, ability:{animal:Animal.LeafcutterAnts,card:animal}, playerId})
              })
              player.trees.forEach(tree => {
                if(tree.score === undefined){
                  tree.trunk.forEach(t => {
                    moves.push({type:MoveType.PlayAbility, ability:{animal:Animal.LeafcutterAnts,card:t}, playerId})
                  })
                  tree.canopy && moves.push({type:MoveType.PlayAbility, ability:{animal:Animal.LeafcutterAnts,card:tree.canopy}, playerId})
                }
              })
              moves.push({type:MoveType.PlayAbility, ability:{animal:Animal.LeafcutterAnts,card:undefined}, playerId})
            }
          }
          return moves
        }
        // TODO : add other endSeasons Moves
        default: return []
      }
    }

    if (this.state.activePlayer !== playerId) return []
    const player = this.state.players[this.state.activePlayer]
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
    const canPassPile:boolean = (this.getCurrentSeasonPile().length > 0 && this.state.currentPile === 3)
    if (this.state.currentPile !== undefined && canPassPile) {
      moves.push(passOnPileMove)
    }
    return moves
  }

  play(move: Move): void {
    switch (move.type) {
      case MoveType.DealCard:
        return dealCard(this.state, move.pile)
      case MoveType.SetActivePlayer:
        return setActivePlayer(this.state, move)
      case MoveType.LookAtNewGrowthPile:
        return lookAtNewGrowthPile(this.state)
      case MoveType.DrawOneFromSeasonDeck:
        return drawOneFromSeasonDeck(this.state)
      case MoveType.PlayCard:
        return playCard(this.state, move)
      case MoveType.PassOnPile:
        return passOnPile(this.state)
      case MoveType.NextEndSeasonStep:
        return nextEndSeasonStep(this.state)
      case MoveType.PlayAbility:
        return playAbility(this.state, move)
    }
  }

  getAutomaticMove(): void | Move {
    if (this.isSeasonBeginning()) {
      for (let pile = 1; pile <= this.state.newGrowthPiles.length; pile++) {
        if (this.state.newGrowthPiles[pile - 1].length < pile) {
          return dealCardMove(pile)
        }
      }
      return setActivePlayerMove(this.getIdOfPlayerWithLowestScore())
    } else if (this.state.endOfSeason) {
      switch(this.state.endOfSeason){
        case EndOfSeasonStep.Wildlife:{
          if(this.state.players.some(p => hasAnimalAmongWildlife(p,Animal.LeafcutterAnts) || hasAnimalAmongWildlife(p,Animal.HarmoniaMantle) )) return
          else if (this.state.players.some(p => hasAnimalAmongWildlife(p,Animal.Jaguar))){
            //TODO : When Jaguar have to attack ? Check Trello for more infos
            const hunterId:number = this.state.players.findIndex(p => p.abilities.some(a => a.animal === Animal.Jaguar && a.user !== true)) +1
            const prey:number = shuffle([...this.state.players.find(p => p.abilities.every(a => a.animal !== Animal.Jaguar))!.wildlife])[0]
            return {type:MoveType.PlayAbility, ability:{animal:Animal.Jaguar, prey}, playerId:hunterId}
          } else return nextEndSeasonStepMove()
        }
        case EndOfSeasonStep.Seeds:{
          // TODO: distribution of germination cards according to seeds + fires
        }
      }
      // TODO other end of season rules
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
          return drawOneFromSeasonDeckMove
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

  getView(playerId?: number): GameView {
    return {
      ...this.state,
      seedsDeck: this.state.seedsDeck.length,
      seasonPiles: this.state.seasonPiles.map(deck => deck.length),
      newGrowthPiles: this.state.newGrowthPiles.map(deck => deck.length),
      players: this.state.players.map((player, id) => id === playerId ? player : hidePlayerHand(player))
    }
  }

  getPlayerView(playerId: number): GameView {
    return this.getView(playerId)
  }

  getMoveView(move: Move): MoveView {
    return move
  }

  getPlayerMoveView(move: Move, playerId: number): MoveView {
    switch (move.type) {
      case MoveType.LookAtNewGrowthPile:
      case MoveType.DrawOneFromSeasonDeck:  
      {
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

  getCurrentSeasonPile():number[]{
    return this.state.seasonPiles[this.state.season-1]
  }

  
}