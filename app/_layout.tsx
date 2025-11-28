/*
Expo Router :
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

Vector Icons :
npm install @expo/vector-icons --legacy-peer-deps

Babel Preset Expo & Worklets :
npm install --save-dev babel-preset-expo --legacy-peer-deps
npx expo install react-native-worklets

Gesture Handler & Reanimated (for swipe tabs) :
npx expo install react-native-gesture-handler react-native-reanimated
*/

import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function ContentLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
      name="index" 
      options={{
        title: "Tabs - Page 1", 
        tabBarLabel: "Page 1",
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
      }} />
      <Tabs.Screen 
      name="page2" 
      options={{ 
        title: "Tabs - Page 2", 
        tabBarLabel: "Page 2",
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          )
        }} />
      <Tabs.Screen name="page3" options={{ headerShown: false, tabBarLabel: "Page 3" }} />
      <Tabs.Screen name="page4" options={{ title: "Tabs - Page 4", tabBarLabel: "Page 4" }} />
      <Tabs.Screen
        name="page5"
        options={{
          headerShown: false,
          tabBarLabel: "Page 5",
          tabBarStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ContentLayout />
    </GestureHandlerRootView>
  );
}