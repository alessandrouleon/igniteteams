import { NavigationContainer } from "@react-navigation/native";
import { AppRouter } from "./app.routes";
import { View } from "react-native";
import { ThemeType, useTheme } from "styled-components/native";

export function Routes() {
  const theme = useTheme() as ThemeType;
  return (
    <View style={{flex: 1, backgroundColor: theme.COLORS.GRAY_600}}>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </View>
  );
}
