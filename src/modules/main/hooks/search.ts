import {fetchCities} from '@/api/weather.api';
import {SelectedCityItem} from '@/store/weatherSlice';
import {useState} from 'react';

export const useSearch = () => {
  const [search, setSearch] = useState<string>('');
  const [cities, setCities] = useState<SelectedCityItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const onChangeSearch = (value: string) => {
    const validatedValue = value.replace(/[^A-Za-zА-Яа-я\s-]/g, '');
    setSearch(validatedValue);
  };
  const onSearch = () => {
    setHasSearched(true);
    fetch(search);
  };
  const onClean = () => {
    setHasSearched(false);
    setSearch('');
    setCities([]);
  };

  const fetch = (value: string) => {
    setLoading(true);
    fetchCities(value)
      .then(response => {
        setCities(response.data);
      })
      .catch(error => {})
      .finally(() => setLoading(false));
  };

  return {
    hasSearched,
    search,
    cities,
    loading,
    fetch,
    onClean,
    onChangeSearch,
    onSearch,
  };
};
