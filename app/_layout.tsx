/*
Expo Router :
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

Vector Icons :
npm install @expo/vector-icons

Expo Drawer :
npx expo install @react-navigation/drawer react-native-worklets react-native-gesture-handler react-native-reanimated
*/

import { Pressable } from "react-native";
import { Drawer } from "expo-router/drawer";
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from "../components/customDrawerContent";

// Composant pour le bouton personnalisé pour page 2
function CustomDrawerButton() {
  const navigation = useNavigation();
  
  return (
    <Pressable 
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      style={{ marginLeft: 15 }}
    >
      <Ionicons name="settings-outline" size={28} />
    </Pressable>
  );
}

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props: any) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen 
        name="index" 
        options={{ title: "Drawer - Page 1" }} 
      />
      <Drawer.Screen 
        name="page2" 
        options={{ 
          title: "Drawer - Page 2",
          headerLeft: () => <CustomDrawerButton />,
        }} 
      />
      <Drawer.Screen 
        name="page3" 
        options={{ 
          title: "Drawer - Page 3",
          headerLeft: () => null, // Retire seulement le bouton burger
          swipeEnabled: false, // Désactive le geste de glissement
        }} 
      />
      <Drawer.Screen 
        name="page4" 
        options={{ title: "Drawer - Page 4" }} 
      />
      <Drawer.Screen 
        name="page5" 
        options={{ 
          headerShown: false,
          swipeEnabled: false, // Désactive le geste de glissement
        }} 
      />
    </Drawer>
  );
}
