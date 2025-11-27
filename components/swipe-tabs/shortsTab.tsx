import { View, Text, StyleSheet } from "react-native";

export default function ShortsTab() {
  return (
    <View style={[styles.container, { backgroundColor: "#CCFFCC" }]}>
      <Text style={styles.text}>🎬 Shorts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 28, fontWeight: "bold" },
});
