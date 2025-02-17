import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './styles.ts';
import {SelectedCityItem} from '@/store/weatherSlice.ts';

interface Props {
  data: SelectedCityItem;
}

const ForecastItemCard: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.cityName}>{data.date}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>
      <View>
        <Text style={styles.temperature}>{data.temp}°</Text>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${data?.icon}@2x.png`,
          }}
          style={styles.weatherIcon}
        />
      </View>
    </View>
  );
};

export default ForecastItemCard;
