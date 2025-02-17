import {fetchCities} from '@/api/weather.api';
import {useState} from 'react';

export const useSearch = () => {
  const [search, setSearch] = useState<string>('');
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const onChangeSearch = (value: string) => {
    const validatedValue = value.replace(/[^A-Za-zА-Яа-я\s-]/g, '');
    setSearch(validatedValue);
  };
  const onSearch = () => {
    fetch(search);
  };
  const onClean = () => {
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
    search,
    loading,
    fetch,
    cities,
    onClean,
    onChangeSearch,
    onSearch,
  };
};
