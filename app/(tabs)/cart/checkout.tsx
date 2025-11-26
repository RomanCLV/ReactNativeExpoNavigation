import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function CheckoutScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Finaliser le paiement</Text>
      <Text>Formulaire de paiement...</Text>
      <Button 
        title="Retour au panier" 
        onPress={() => router.back()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 15 },
  title: { fontSize: 24, fontWeight: "bold" },
});