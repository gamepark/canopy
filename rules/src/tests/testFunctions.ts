import { getCardIds } from "../material/cards"
import Deck, { CARDS_START_DISMISS } from "../material/cards/Deck"
import GameState from "../state/GameState"
import PlayerState from "../state/PlayerState"
import shuffle from 'lodash.shuffle'

function createGameState(player:PlayerState):GameState{
    const rainforestDeck = shuffle(getCardIds(card => card.deck === Deck.Rainforest && !card.advanced))
    rainforestDeck.splice(0,CARDS_START_DISMISS)
    return{
        players:[player],
        season: 1,
        seedsDeck: shuffle(getCardIds(card => card.deck === Deck.Seed)),
        newGrowthPiles: [[], [], []],
        seasonPiles: [rainforestDeck.splice(rainforestDeck.length * 2 / 3), rainforestDeck.splice(rainforestDeck.length / 2), rainforestDeck],
    }
}

export default createGameState

export function createPlayer():PlayerState{
    return{
        abilities:[],
        hand:[],
        plants:[],
        seeds:[],
        tempDiscard:[],
        threats:[],
        trees:[],
        weather:[],
        wildlife:[],
        score:0
    }
}

