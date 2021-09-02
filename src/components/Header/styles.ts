import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  header: {
    paddingTop: 25,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: theme.colors.blue,
    height: 80,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    flexDirection: 'row',
  },
  textHeader: {
    fontSize: 20,
    fontFamily: theme.fonts.primary700,
    color: theme.colors.backgroudBlue,
  }
})