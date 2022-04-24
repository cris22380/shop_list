import {StyleSheet} from 'react-native';
import {colors} from '../../../Colors/colors';

export const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    height: 50,
    width: '100%',
    borderRadius: 10,
    borderColor: colors.lightSlateGray,
    backgroundColor: '#fff',
    paddingLeft: 15,
  },
  wrapper: {
    // flex: 1,
    alignItems: 'center',
  },
});
