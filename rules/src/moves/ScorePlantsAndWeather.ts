import { scorePlants } from "../material/cards/Plant";
import { scoreWeather } from "../material/cards/Weather";
import GameState from "../state/GameState";
import GameView from "../state/GameView";
import MoveType from "./MoveType";
import { nextEndSeasonStep } from "./NextEndSeasonStep";

type ScorePlantsAndWeather = {
    type:MoveType.ScorePlantsAndWeather
}

export default ScorePlantsAndWeather

export const scorePlantsAndWeatherMove:ScorePlantsAndWeather = {type:MoveType.ScorePlantsAndWeather}

export function scorePlantsAndWeather(state:GameState|GameView){
    state.players.forEach(p => {
        p.score += scoreWeather(p.weather)
        p.score += scorePlants(p.plants, p.trees.filter(t => t.canopy !== undefined).length)
    })
    nextEndSeasonStep(state)
}