import React from 'react';
import {SafeAreaView, Image, Text, View} from 'react-native';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParams} from '@/navigation/types';
import {useRoute} from '@react-navigation/native';
import {useWeather} from '../hooks/weather';
import CustomHeader from '../components/CustomHeader';
import {addToSavedCities} from '@/store/weatherSlice';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';
import {COLORS} from '@/config/theme/colors';
import {FlatList} from 'react-native-gesture-handler';
import ForecastItemCard from '../components/ForecastItemCard';

const WeatherScreen = ({navigation}: NativeStackScreenProps<StackParams>) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {weatherInfo, forecastInfo, loading} = useWeather();
  const {data} = route.params as {data: {name: string}};
  const {savedCities} = useSelector(state => state.weather);

  const isSaved = savedCities.some(c => c.id === weatherInfo?.id);

  const handleSaveCity = () => {
    dispatch(addToSavedCities(weatherInfo));
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        isSaved={isSaved}
        onBack={() => navigation.goBack()}
        onSave={handleSaveCity}
      />
      {loading ? (
        <ActivityIndicator color={COLORS.gray[400]} />
      ) : (
        <>
          <FlatList
            ListHeaderComponent={
              <>
                <View style={styles.content}>
                  <Text style={styles.headerTitle}>
                    {weatherInfo?.name || data.name}
                  </Text>
                  <Text style={styles.temperature}>
                    {Math.round(weatherInfo?.main.temp)}°
                  </Text>
                  <View style={styles.condition}>
                    <Image
                      source={{
                        uri: `https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@2x.png`,
                      }}
                      style={styles.weatherIcon}
                    />
                    <Text style={styles.weather}>
                      {weatherInfo?.weather[0].description}
                    </Text>
                  </View>
                </View>
                <Text style={styles.forecast}>Ежедневный прогноз</Text>
              </>
            }
            data={forecastInfo}
            style={styles.list}
            keyExtractor={(item, index) => item.id ? item.id.toString() : `${item.name}-${index}`}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <ForecastItemCard data={item} />}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default WeatherScreen;
