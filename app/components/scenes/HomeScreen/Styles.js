import {StyleSheet} from 'react-native';
import {colors} from '../../Colors/colors';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.aliceBlue,
    height: '100%',
  },
  wrapper: {
    paddingVertical: 50,
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
