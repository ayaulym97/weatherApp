import React, {useMemo} from 'react';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParams} from '@/navigation/types';
import SearchInput from '../components/SearchInput';
import {useSearch} from '../hooks/search';
import {FlatList} from 'react-native-gesture-handler';
import CityItem from '../components/CityItem';
import {COLORS} from '@/config/theme/colors';
import EmptyCard from '../components/EmptyCard';
import {useSelector} from 'react-redux';
import SavedCityCard from '../components/SavedCityCard';
import {SelectedCityItem} from '@/store/weatherSlice';

const MainScreen = ({navigation}: NativeStackScreenProps<StackParams>) => {
  const {
    search,
    loading,
    cities,
    hasSearched,
    onChangeSearch,
    onSearch,
    onClean,
  } = useSearch();
  const {savedCities} = useSelector(state => state.weather);

  const goToWeatherPage = (item: SelectedCityItem) => {
    navigation.navigate('weather.index', {data: item});
  };

  const renderListHeader = useMemo(() => {
    if (search.length === 0 && savedCities.length > 0) {
      return <Text style={styles.saved}>Сохраненное</Text>;
    }
    return null;
  }, [search, savedCities.length]);

  const renderListEmpty = useMemo(() => {
    if (!loading && hasSearched && cities.length === 0) {
      return <EmptyCard name={search} />;
    }
    return null;
  }, [loading, hasSearched, cities.length, search]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerTitle}>Погода</Text>
        <SearchInput
          value={search}
          onChange={onChangeSearch}
          onClean={onClean}
          onSearch={onSearch}
        />
        {loading ? (
          <ActivityIndicator color={COLORS.gray[400]} style={styles.loader} />
        ) : (
          <FlatList
            keyExtractor={(item, index) =>
              item.id ? item.id.toString() : `${item.name}-${index}`
            }
            ListHeaderComponent={renderListHeader}
            data={
              search.length === 0 && savedCities.length >= 1
                ? savedCities
                : cities
            }
            renderItem={({item}) =>
              search.length === 0 && savedCities.length ? (
                <SavedCityCard
                  data={item}
                  onPress={() => goToWeatherPage(item)}
                />
              ) : (
                <CityItem
                  name={`${item.name}, ${item.country}`}
                  onPress={() => goToWeatherPage(item)}
                />
              )
            }
            ListEmptyComponent={renderListEmpty}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
