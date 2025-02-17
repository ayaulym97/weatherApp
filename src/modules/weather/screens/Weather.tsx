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

const WeatherScreen = ({navigation}: NativeStackScreenProps<StackParams>) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {weatherInfo} = useWeather();
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
      <View style={styles.content}>
        <Text style={styles.headerTitle}>{weatherInfo?.name || data.name}</Text>
        <Text style={styles.temperature}>{weatherInfo?.main.temp}°</Text>
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
    </SafeAreaView>
  );
};

export default WeatherScreen;
