import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function CartScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Panier</Text>
      <Text style={styles.item}>• iPhone 15 - 999€</Text>
      <Button 
        title="Passer au paiement 💳" 
        onPress={() => router.push("/cart/checkout")}
        color="#10b981"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 15 },
  title: { fontSize: 24, fontWeight: "bold" },
  item: { fontSize: 16, marginVertical: 5 },
});