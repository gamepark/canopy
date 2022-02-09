import { getCardIds, getFirstCardId } from "../material/cards"
import Deck, { CARDS_START_DISMISS } from "../material/cards/Deck"
import { scorePlants } from "../material/cards/Plant"
import PlantSpecies, { scoreBromelias, scoreCoinCapFungi, scoreFerns, scoreLianas, scoreMonsteras, scoreOrchids } from "../material/cards/PlantSpecies"
import { scoreWeather } from "../material/cards/Weather"
import { scoreTrees } from "../moves/ScoreTrees"
import GameState from "../state/GameState"
import PlayerState from "../state/PlayerState"
import Tree, { scoreCanopy, scoreTrunk } from "../state/Tree"
import shuffle from 'lodash.shuffle'
import CardType from "../material/cards/CardType"
import WeatherType from "../material/cards/WeatherType"




describe('Tests of plants, weathers and trees scoring methods', () => {
    test('scoreBromelia', () => {
        expect(scoreBromelias(0)).toBe(0)
        expect(scoreBromelias(1)).toBe(2)
        expect(scoreBromelias(2)).toBe(7)
        expect(scoreBromelias(3)).toBe(-3)
        expect(scoreBromelias(5)).toBe(-3)
    })
    test('scoreMonstera', () => {
        expect(scoreMonsteras(0)).toBe(0)
        expect(scoreMonsteras(1)).toBe(0)
        expect(scoreMonsteras(2)).toBe(0)
        expect(scoreMonsteras(3)).toBe(8)
        expect(scoreMonsteras(5)).toBe(8)
    })
    test('scoreFern', () => {
        expect(scoreFerns(0)).toBe(0)
        expect(scoreFerns(1)).toBe(2)
        expect(scoreFerns(2)).toBe(0)
        expect(scoreFerns(3)).toBe(6)
        expect(scoreFerns(5)).toBe(10)
        expect(scoreFerns(6)).toBe(0)
        expect(scoreFerns(7)).toBe(14)
    })
    test('scoreOrchid', () => {
        expect(scoreOrchids(0)).toBe(0)
        expect(scoreOrchids(1)).toBe(4)
        expect(scoreOrchids(2)).toBe(8)
    })
    test('scoreLianas', () => {
        expect(scoreLianas(0,3)).toBe(0)
        expect(scoreLianas(1,3)).toBe(3)
        expect(scoreLianas(2,3)).toBe(6)
    })
    test('scoreCoinCapFungi', () => {
        expect(scoreCoinCapFungi(0)).toBe(0)
        expect(scoreCoinCapFungi(1)).toBe(1)
        expect(scoreCoinCapFungi(2)).toBe(2)
    })
    test('scorePlants', () => {
        const state:GameState = createGameState(createPlayer())
        const bromeliaId = getFirstCardId(c => c.type === CardType.Plant && c.species === PlantSpecies.Bromelia) 
        const fernId = getFirstCardId(c => c.type === CardType.Plant && c.species === PlantSpecies.Fern) 
        const monsteraId = getFirstCardId(c => c.type === CardType.Plant && c.species === PlantSpecies.Monstera) 
        const plants:number[] = [bromeliaId,bromeliaId,bromeliaId,
                                 fernId,fernId,fernId,fernId,fernId,fernId,fernId,
                                 monsteraId,monsteraId,monsteraId]
        state.players[0].plants = plants
        expect(scorePlants(state.players[0].plants, 0)).toBe(19)
    })
    test('scoreWeather', () => {
        const sunId = getFirstCardId(c => c.type === CardType.Weather && c.weather === WeatherType.Sun)
        const rainId = getFirstCardId(c => c.type === CardType.Weather && c.weather === WeatherType.Rain)
        const weatherArray1:number[] = []
        const weatherArray2:number[] = [sunId]
        const weatherArray3:number[] = [sunId,rainId]
        const weatherArray4:number[] = [sunId,sunId,sunId,rainId,rainId,rainId,rainId]
        expect(scoreWeather(weatherArray1)).toBe(0)
        expect(scoreWeather(weatherArray2)).toBe(0)
        expect(scoreWeather(weatherArray3)).toBe(5)
        expect(scoreWeather(weatherArray4)).toBe(15)
    })

})

describe('tests of trees', () => {
    const trunk0Id = getFirstCardId(c => c.type === CardType.Trunk && c.value === 0)
    const trunk1Id = getFirstCardId(c => c.type === CardType.Trunk && c.value === 1)
    const trunk2Id = getFirstCardId(c => c.type === CardType.Trunk && c.value === 2)
    const canopy0Id = getFirstCardId(c => c.type === CardType.Canopy && c.value === 0)
    const canopy1Id = getFirstCardId(c => c.type === CardType.Canopy && c.value === 1)
    const canopy2Id = getFirstCardId(c => c.type === CardType.Canopy && c.value === 2)

    const tree1:Tree = {trunk:[trunk0Id], canopy:canopy0Id}
    const tree2:Tree = {trunk:[trunk0Id,trunk1Id,trunk2Id], canopy:canopy2Id}

    test('scoreTrunks', () => {
        expect(scoreTrunk(tree1)).toBe(0)
        expect(scoreTrunk(tree2)).toBe(3)
    })

    test('score Canopies', () => {
        expect(scoreCanopy(tree1)).toBe(0)
        expect(scoreCanopy(tree2)).toBe(6)
    })

    test ('scoreTrees', () => {
        const state = createGameState(createPlayer())
        state.players[0].trees.push(tree1, tree2)
        scoreTrees(state)
        expect(state.players[0].score).toBe(12)
    })

})

function createPlayer():PlayerState{
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