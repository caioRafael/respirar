import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  progressContainer: {
    marginVertical: 20,
    width: '90%',
    height: 5,
    backgroundColor: theme.colors.gray,
    borderRadius: 10,
  },
  progress: {
    height: 5,
    width: '45%',
    backgroundColor: theme.colors.brown,
    borderRadius: 10,
  }
})