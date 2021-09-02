
import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.darkBackgroud
    // backgroundColor: theme.colors.whiteBackground
  },

  header: {
    backgroundColor: theme.colors.white,
    height: 50,
    width: "100%",
  }
})