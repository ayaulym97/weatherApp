import React from 'react';
import {TextInput, View} from 'react-native';

import {styles} from './styles.ts';
import {COLORS} from '@/config/theme/colors.ts';
import IconButton from '@/modules/shared/components/IconButton/IconButton.tsx';
import {scale} from '@/config/theme/sizes.ts';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onClean: () => void;
  onSearch: (value: string) => void;
}

const SearchInput: React.FC<Props> = ({value, onChange, onSearch, onClean}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder="Поиск"
          autoFocus
          placeholderTextColor={COLORS.gray[400]}
          onChangeText={search => onChange(search)}
        />
        {value.length > 0 && (
          <IconButton
            name="close-circle-sharp"
            size={scale(18)}
            color={COLORS.gray[400]}
            onPress={onClean}
          />
        )}
      </View>
      <IconButton
        name="search"
        size={scale(20)}
        color={COLORS.white}
        onPress={onSearch}
        style={styles.searchButton}
      />
    </View>
  );
};

export default SearchInput;
