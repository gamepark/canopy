enum WeatherCard {
    Rain = 'Rain',
    Sun = 'Sun',
}
  
export default WeatherCard

export const weatherCards = Object.values(WeatherCard) as WeatherCard[]

export function isWeatherCard(item: any): item is WeatherCard {
  return weatherCards.indexOf(item) !== -1
}
