import {fetchWeather, getWeatherAndForecast} from '@/api/weather.api';
import {SelectedCityItem} from '@/store/weatherSlice';
import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';

export const useWeather = () => {
  const route = useRoute();
  const {data} = route.params as {
    data: SelectedCityItem;
  };
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [forecastInfo, setForecastInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getWeatherAndForecast(
        data.lat ? data.lat : data.coord.lat,
        data.lon ? data.lon : data.coord.lon,
      );
      setWeatherInfo(response.weather);
      setForecastInfo(response.forecast);
    } catch (error: unknown) {
      console.error('Ошибка загрузки данных:', error);
      Alert.alert(error.message);
    } finally {
      setLoading(false);
    }
    setLoading(false);
  };

  return {
    weatherInfo,
    forecastInfo,
    loading,
    fetch,
  };
};
