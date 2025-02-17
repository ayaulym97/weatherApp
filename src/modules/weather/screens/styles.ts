import {StyleSheet} from 'react-native';
import {COLORS} from '@/config/theme/colors';
import {FONT_SIZE, scale} from '@/config/theme/sizes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  content: {
    alignItems: 'center',
  },
  headerTitle: {
    marginTop: scale(32),
    fontSize: scale(FONT_SIZE['4xl']),
    color: COLORS.white,
    fontWeight: '700',
  },
  condition: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperature: {
    marginTop: 16,
    fontSize: scale(FONT_SIZE['4xl']),
    color: COLORS.white,
  },
  weather: {
    marginLeft: 4,
    fontSize: scale(FONT_SIZE['md']),
    color: COLORS.white,
  },
  weatherIcon: {
    width: scale(60),
    aspectRatio: 1,
  },
  forecast: {
    marginTop: scale(16),
    fontSize: scale(FONT_SIZE.sm),
    color: COLORS.gray[100],
  },
  list:{
    width: '90%',
    marginHorizontal: '5%',
  }
});
