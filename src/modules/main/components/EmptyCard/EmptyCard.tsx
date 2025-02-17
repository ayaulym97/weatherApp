import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles.ts';
import {COLORS} from '@/config/theme/colors.ts';

interface Props {
  name: string;
}

const EmptyCard: React.FC<Props> = ({name}) => {
  return (
    <View style={styles.container}>
      <Icon name="search-outline" size={60} color={COLORS.gray[400]} />
      <Text style={styles.header}>Не найдено</Text>
      <Text style={styles.title}>{`По запросу ${name} ничего не найдено`}</Text>
    </View>
  );
};

export default EmptyCard;
