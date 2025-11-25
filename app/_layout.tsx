/*
Expo Router :
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
*/
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Stack - Page 1" }} />
      <Stack.Screen name="page2" options={{ title: "Stack - Page 2" }} />
      <Stack.Screen
        name="page3"
        options={{
          title: "Stack - Page 3",
          headerBackVisible: false, // enlève la flèche retour
        }}
      />
      <Stack.Screen name="page4" options={{ title: "Stack - Page 4" }} />
      <Stack.Screen
        name="page5"
        options={{
          headerShown: false, // aucun header
        }}
      />
    </Stack>
  );
}
