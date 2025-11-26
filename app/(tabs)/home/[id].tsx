import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function ProductDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produit #{id}</Text>
      <Text style={styles.description}>
        Voici tous les détails du produit sélectionné.
      </Text>
      <Text style={styles.info}>
        🎯 Notez que la barre d'onglets est toujours visible en bas !
      </Text>
      <Text style={styles.info}>
        📱 Vous pouvez naviguer vers les autres onglets tout en gardant cet historique.
      </Text>
      <Button 
        title={"Retour à la liste"} 
        onPress={() => router.back()}
      >
      </Button>
      <Button 
        title="Ajouter au panier" 
        onPress={() => router.push("/cart")}
        color="#10b981"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20,
    gap: 15,
  },
  title: { 
    fontSize: 28, 
    fontWeight: "bold" 
  },
  description: { 
    fontSize: 16, 
    color: "#666" 
  },
  info: {
    fontSize: 14,
    color: "#9333ea",
    backgroundColor: "#faf5ff",
    padding: 10,
    borderRadius: 8,
  },
});