import CardType from './CardType'
import Deck from './Deck'
import WeatherType from './WeatherType'

type Weather = {
  deck: Deck
  type: CardType.Weather
  weather: WeatherType
}

export default Weather