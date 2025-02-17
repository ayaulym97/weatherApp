import {StyleSheet} from 'react-native';
import {COLORS} from '@/config/theme/colors';
import {FONT_SIZE} from '@/config/theme/sizes';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  title: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.white,
  },
});
