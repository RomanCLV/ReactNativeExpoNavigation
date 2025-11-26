import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* En-tête profil */}
      <View style={styles.header}>
        <Ionicons name="person-circle" size={80} color="#9333ea" />
        <Text style={styles.name}>Jean Dupont</Text>
        <Text style={styles.email}>jean.dupont@email.com</Text>
      </View>

      {/* Statistiques */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Commandes</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>450€</Text>
          <Text style={styles.statLabel}>Dépensé</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>89</Text>
          <Text style={styles.statLabel}>Points</Text>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <Button 
          title="📦 Mes Commandes" 
          onPress={() => router.push("/profile/orders")}
        />
        
        <Button 
          title="⚙️ Paramètres" 
          onPress={() => router.push("/profile/settings")}
          color="#6b7280"
        />
        
        <Button 
          title="❤️ Mes Favoris" 
          onPress={() => alert("Favoris (à implémenter)")}
          color="#ec4899"
        />
        
        <Button 
          title="🎁 Programme de fidélité" 
          onPress={() => alert("Fidélité (à implémenter)")}
          color="#10b981"
        />
      </View>

      {/* Déconnexion */}
      <View style={styles.footer}>
        <Button 
          title="Se déconnecter" 
          onPress={() => alert("Déconnexion...")}
          color="#ef4444"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#faf5ff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "#111",
  },
  email: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#9333ea",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  actionsContainer: {
    padding: 20,
    gap: 12,
  },
  footer: {
    padding: 20,
    marginTop: "auto",
  },
});