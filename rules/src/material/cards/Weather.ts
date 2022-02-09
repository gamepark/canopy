import cards from '.'
import PlayerState from '../../state/PlayerState'
import PlayerView from '../../state/PlayerView'
import CardType from './CardType'
import Deck from './Deck'
import WeatherType from './WeatherType'

type Weather = {
  deck: Deck
  type: CardType.Weather
  weather: WeatherType
}

export const WEATHER_SCORE = 5

export default Weather

export function scoreWeather(weather:number[]):number{
  const sunOwned:number = weather.filter(w => {
    const card = cards[w]
    return card.type === CardType.Weather && card.weather === WeatherType.Sun
  }).length
  const rainOwned:number = weather.filter(w => {
    const card = cards[w]
    return card.type === CardType.Weather && card.weather === WeatherType.Rain
  }).length
  return Math.min(sunOwned, rainOwned) * WEATHER_SCORE
}