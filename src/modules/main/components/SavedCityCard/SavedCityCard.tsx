import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles.ts';
import {SelectedCityItem} from '@/store/weatherSlice.ts';

interface Props {
  data: SelectedCityItem;
  onPress: () => void;
}

const SavedCityCard: React.FC<Props> = ({data, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.cityName}>{data.name}</Text>
        <Text style={styles.description}>{data.weather[0].description}</Text>
      </View>
      <View>
        <Text style={styles.temperature}>{Math.round(data.main.temp)}°</Text>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`,
          }}
          style={styles.weatherIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SavedCityCard;
