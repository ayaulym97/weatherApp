import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles.ts';
import {COLORS} from '@/config/theme/colors.ts';

import {scale} from '@/config/theme/sizes.ts';
import IconButton from '@/modules/shared/components/IconButton/IconButton.tsx';
import {Button} from 'react-native-paper';

interface Props {
  isSaved: boolean;
  onBack: () => void;
  onSave: () => void;
}

const CustomHeader: React.FC<Props> = ({isSaved, onBack, onSave}) => {
  return (
    <View style={styles.container}>
      <IconButton
        name="arrow-back"
        size={scale(30)}
        color={COLORS.gray[400]}
        style={styles.backButton}
        onPress={onBack}
      />
      <Button
        style={styles.saveButton}
        mode="contained"
        buttonColor={isSaved ? COLORS.red[500] : COLORS.blue[400]}
        onPress={onSave}>
        {isSaved ? 'Удалить' : 'Сохранить'}
      </Button>
    </View>
  );
};

export default CustomHeader;
