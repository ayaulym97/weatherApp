import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '@/config/theme/colors';
import {FONT_SIZE} from '@/config/theme/sizes';
const screenHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight * 0.4,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.white,
    fontWeight: '700',
    marginTop: 16,
  },
  title: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray[400],
    marginTop: 8,
  },
});
