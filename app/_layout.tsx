/*
Expo Router :
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

Vector Icons :
npm install @expo/vector-icons --legacy-peer-deps
*/
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
//import { createTabRootListener } from "../utils/createTabResetListener";

export default function TabsLayout() {
  
  return (
    <Tabs>
      <Tabs.Screen 
        name="(tabs)/home" 
        options={{
          title: "Boutique",
          headerShown: false, // Le Stack imbriqué gère son propre header
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
        //listeners={createTabRootListener('(tabs)/home')}
      />
      <Tabs.Screen 
        name="(tabs)/cart" 
        options={{
          title: "Panier",
          headerShown: false, // Le Stack imbriqué gère son propre header
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
        //listeners={createTabRootListener('(tabs)/cart')}
      />
      <Tabs.Screen 
        name="(tabs)/profile" 
        options={{
          title: "Profil",
          headerShown: false, // Le Stack imbriqué gère son propre header
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }} 
        //listeners={createTabRootListener('(tabs)/profile')}
      />
    </Tabs>
  );
}
