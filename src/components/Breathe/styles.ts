import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  outsideAirContainer: {
    // width: 250,
    // height: 250,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 250,
    backgroundColor: theme.colors.gray
  },
  indoorAirContainer: {
    width: 150,
    height: 150,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 250,
    backgroundColor: theme.colors.blue
  },
})