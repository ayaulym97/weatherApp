import {StyleSheet} from 'react-native';
import {scale} from '@/config/theme/sizes';
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    marginLeft: '5%',
  },
  saveButton: {
    marginRight: '5%',
  },
});
