import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from './styles.ts';

interface Props {
  name: string;
  size: number;
  color: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const IconButton: React.FC<Props> = ({name, color, size, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
