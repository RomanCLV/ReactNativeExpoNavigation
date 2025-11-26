import { Stack } from "expo-router";

export default function ProfileStackLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ title: "Mon Profil" }} 
      />
      <Stack.Screen 
        name="settings" 
        options={{ title: "Paramètres" }} 
      />
      <Stack.Screen 
        name="orders" 
        options={{ title: "Mes Commandes" }} 
      />
    </Stack>
  );
}