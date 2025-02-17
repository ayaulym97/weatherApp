import {fetchWeather} from '@/api/weather.api';
import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';

export const useWeather = () => {
  const route = useRoute();
  const {data} = route.params as {data: {name: string}};
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    setLoading(true);

    fetchWeather(
      data.lat ? data.lat : data.coord.lat,
      data.lon ? data.lon : data.coord.lon,
    )
      .then(response => {
        setWeatherInfo(response.data);
      })
      .catch(error => {})
      .finally(() => setLoading(false));
  };

  return {
    weatherInfo,
    loading,
    fetch,
  };
};
