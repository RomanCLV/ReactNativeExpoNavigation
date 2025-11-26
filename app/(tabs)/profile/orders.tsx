import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const orders = [
  {
    id: "1",
    orderNumber: "CMD-2024-001",
    date: "25 Nov 2024",
    status: "Livré",
    statusColor: "#10b981",
    total: "999€",
    items: "iPhone 15",
  },
  {
    id: "2",
    orderNumber: "CMD-2024-002",
    date: "20 Nov 2024",
    status: "En cours",
    statusColor: "#f59e0b",
    total: "279€",
    items: "AirPods Pro",
  },
  {
    id: "3",
    orderNumber: "CMD-2024-003",
    date: "15 Nov 2024",
    status: "Livré",
    statusColor: "#10b981",
    total: "2499€",
    items: "MacBook Pro",
  },
  {
    id: "4",
    orderNumber: "CMD-2024-004",
    date: "10 Nov 2024",
    status: "Annulé",
    statusColor: "#ef4444",
    total: "149€",
    items: "Magic Keyboard",
  },
];

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <Pressable style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <View>
                <Text style={styles.orderNumber}>{item.orderNumber}</Text>
                <Text style={styles.orderDate}>{item.date}</Text>
              </View>
              <View style={[styles.statusBadge, { backgroundColor: item.statusColor + '20' }]}>
                <Text style={[styles.statusText, { color: item.statusColor }]}>
                  {item.status}
                </Text>
              </View>
            </View>

            <View style={styles.orderBody}>
              <Text style={styles.orderItems}>{item.items}</Text>
              <Text style={styles.orderTotal}>{item.total}</Text>
            </View>

            <View style={styles.orderFooter}>
              <Pressable style={styles.actionButton}>
                <Ionicons name="eye-outline" size={18} color="#9333ea" />
                <Text style={styles.actionText}>Voir détails</Text>
              </Pressable>
              
              {item.status === "Livré" && (
                <Pressable style={styles.actionButton}>
                  <Ionicons name="repeat-outline" size={18} color="#666" />
                  <Text style={styles.actionTextSecondary}>Racheter</Text>
                </Pressable>
              )}
            </View>
          </Pressable>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="cube-outline" size={60} color="#d1d5db" />
            <Text style={styles.emptyText}>Aucune commande</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  listContainer: {
    padding: 15,
    gap: 15,
  },
  orderCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },
  orderDate: {
    fontSize: 12,
    color: "#9ca3af",
    marginTop: 2,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
  orderBody: {
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#f3f4f6",
  },
  orderItems: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 4,
  },
  orderTotal: {
    fontSize: 18,
    fontWeight: "700",
    color: "#9333ea",
  },
  orderFooter: {
    flexDirection: "row",
    gap: 15,
    marginTop: 12,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  actionText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#9333ea",
  },
  actionTextSecondary: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: "#9ca3af",
    marginTop: 10,
  },
});