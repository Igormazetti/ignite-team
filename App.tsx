import { ActivityIndicator, View, StyleSheet } from "react-native";
import theme from "@theme/index";
import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {!fontsLoaded ? (
        <Groups />
      ) : (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      )}
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
