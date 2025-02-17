import {StyleSheet} from 'react-native';
import {COLORS} from '@/config/theme/colors';
import {FONT_SIZE, scale} from '@/config/theme/sizes';

export const styles = StyleSheet.create({
  container: {
    marginVertical: scale(16),
  },
  title: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.white,
  },
});
