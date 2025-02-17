import {StyleSheet} from 'react-native';
import {COLORS} from '@/config/theme/colors';
import {FONT_SIZE, scale} from '@/config/theme/sizes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    backgroundColor: COLORS.black,
  },
  headerTitle: {
    marginTop: 32,
    fontSize: scale(FONT_SIZE['4xl']),
    color: COLORS.white,
  },
  loader: {
    marginTop: 16,
  },
  saved: {
    marginTop: scale(16),
    fontSize: scale(FONT_SIZE.md),
    color: COLORS.gray[100],
  },
});
