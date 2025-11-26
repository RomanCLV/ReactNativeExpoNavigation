import { Stack } from "expo-router";

export default function CartStackLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ title: "Mon Panier" }} 
      />
      <Stack.Screen 
        name="checkout" 
        options={{ title: "Paiement" }} 
      />
    </Stack>
  );
}