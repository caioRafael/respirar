import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
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

  button: {
    position: 'absolute',
    bottom: 10,
    elevation: 10,

    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: 60,
    backgroundColor: theme.colors.blue,
    borderRadius: 10
  },

  textButton: {
    fontSize: 18,
    fontFamily: theme.fonts.primary500,
    color: theme.colors.white
  }
})