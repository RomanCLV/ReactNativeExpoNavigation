import { Stack } from "expo-router";

export default function HomeStackLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ title: "Nos Produits" }} 
      />
      <Stack.Screen 
        name="[id]" 
        options={{ title: "Détail du produit" }} 
      />
    </Stack>
  );
}