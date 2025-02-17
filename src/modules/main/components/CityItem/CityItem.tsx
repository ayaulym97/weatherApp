import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './styles.ts';

interface Props {
  name: string;
  onPress: (item) => void;
}

const CityItem: React.FC<Props> = ({name, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CityItem;
