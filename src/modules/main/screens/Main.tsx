import React from 'react';
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

const MainScreen = ({navigation}: NativeStackScreenProps<StackParams>) => {
  const {search, loading, cities, onChangeSearch, onSearch, onClean} =
    useSearch();
  const {savedCities} = useSelector(state => state.weather);

  const goToWeatherPage = item => {
    console.log('goToWeatherPage', item);
    navigation.navigate('weather.index', {data: item});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
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
            ListHeaderComponent={() =>
              search.length === 0 && savedCities.length ? (
                <Text style={styles.saved}>Сохраненное</Text>
              ) : null
            }
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
                  name={item.name}
                  onPress={() => goToWeatherPage(item)}
                />
              )
            }
            ListEmptyComponent={!loading && <EmptyCard name={search} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
