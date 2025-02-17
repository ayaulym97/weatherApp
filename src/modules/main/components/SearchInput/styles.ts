import {StyleSheet} from 'react-native';
import {COLORS} from '@/config/theme/colors';
import {FONT_SIZE, scale} from '@/config/theme/sizes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: scale(45),
    marginTop: 16,
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'row',
    flex: 1,
    height: scale(45),
    paddingHorizontal: '3%',
    backgroundColor: COLORS.gray[300],

    alignItems: 'center',
  },
  input: {
    flex: 1,
    width: '100%',
    fontSize: scale(FONT_SIZE.md),
    marginLeft: 8,
    color: COLORS.white,
  },
  searchButton: {
    width: scale(45),
    aspectRatio: 1,
    backgroundColor: COLORS.blue[300],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
