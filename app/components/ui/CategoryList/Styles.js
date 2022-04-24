import {StyleSheet} from 'react-native';
import {colors} from '../../Colors/colors';
export const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-start',
  },
  icon: {
    marginLeft: 40,
    backgroundColor: colors.aliceBlue,
    width: 20,
    height: 20,
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  bigTitle: {
    fontSize: 25,
    fontWeight: '900',
    color: colors.darkSlateGray,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.dimGray,
    paddingVertical: 10,
  },
  scrollView: {
    marginVertical: 15,
    backgroundColor: colors.white,
  },
  product: {
    fontSize: 24,
    color: colors.lightSlateGray,
    padding: 12,
  },
  productWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
});
