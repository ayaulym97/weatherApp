import {StyleSheet} from 'react-native';
import {FONT_SIZE, scale} from '@/config/theme/sizes';
import {COLORS} from '@/config/theme/colors';
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.blue[100],
    borderRadius: scale(10),
    marginTop: scale(16),
    paddingVertical: scale(8),
    paddingHorizontal: scale(16),
  },
  cityName: {
    fontSize: scale(FONT_SIZE.md),
    color: COLORS.black,
  },
  description: {
    fontSize: scale(FONT_SIZE.sm),
    color: COLORS.gray[400],
    marginTop: scale(8),
  },
  temperature: {
    marginTop: 16,
    fontSize: scale(FONT_SIZE.lg),
    color: COLORS.black,
  },
  weatherIcon: {
    width: scale(40),
    aspectRatio: 1,
  },

});
