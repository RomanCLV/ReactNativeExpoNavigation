import { View, Text, StyleSheet } from "react-native";

export default function RepostTab() {
  return (
    <View style={[styles.container, { backgroundColor: "#CCCCFF" }]}>
      <Text style={styles.text}>🔁 Reposts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 28, fontWeight: "bold" },
});
