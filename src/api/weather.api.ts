import axios from 'axios';
import api from './axiosInstance';

const WEATHER_API_KEY = 'cc972c72f79afbea7c33b1ab4e1f779b';

export function fetchCities(query: string) {
  return api.get(
    `/geo/1.0/direct?q=${query}&limit=10&appid=${WEATHER_API_KEY}&lang=ru`,
  );
}

export const getWeatherAndForecast = async (lat: string, lon: string) => {
  try {
    const urls = [
      `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&&appid=${WEATHER_API_KEY}&lang=ru`,
      `data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&&appid=${WEATHER_API_KEY}&lang=ru`,
    ];

    const [weatherRes, forecastRes] = await Promise.all(
      urls.map(url => api.get(url)),
    );

    return {
      weather: weatherRes.data,
      forecast: forecastRes.data.list
        .filter((_, index) => index % 8 === 0) // Берем прогноз 1 раз в день
        .map(item => ({
          date: new Date(item.dt * 1000).toLocaleDateString('ru-RU', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
          }),
          temp: Math.round(item.main.temp),
          description: item.weather[0].description,
          icon: item.weather[0].icon,
        })),
    };
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
    throw error;
  }
};
