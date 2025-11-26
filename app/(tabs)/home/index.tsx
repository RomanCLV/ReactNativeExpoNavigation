import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const products = [
  { id: "1", name: "iPhone 15", price: "999€" },
  { id: "2", name: "MacBook Pro", price: "2499€" },
  { id: "3", name: "AirPods Pro", price: "279€" },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nos Produits</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <Button 
              title="Voir plus 👉" 
              onPress={() => router.push(`/home/${item.id}`)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  productCard: {
    backgroundColor: "#e6e6e6",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  productName: { fontSize: 18, fontWeight: "600" },
  productPrice: { fontSize: 16, color: "#666", marginVertical: 5 },
});