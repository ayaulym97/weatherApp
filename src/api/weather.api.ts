import axios from 'axios';

const WEATHER_API_KEY = 'cc972c72f79afbea7c33b1ab4e1f779b';

export function fetchCities(query: string) {
  return axios
    .get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=10&appid=${WEATHER_API_KEY}&lang=ru`,
    )
    .then(res => {
      return res;
    });
}
export function fetchWeather(lat: string, lon: string) {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&&appid=${WEATHER_API_KEY}&lang=ru`,
    )
    .then(res => {
      return res;
    });
}
