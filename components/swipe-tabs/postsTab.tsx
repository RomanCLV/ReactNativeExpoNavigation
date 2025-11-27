import { View, Text, StyleSheet } from "react-native";

export default function PostsTab() {
  return (
    <View style={[styles.container, { backgroundColor: "#FFCCCC" }]}>
      <Text style={styles.text}>📸 Posts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 28, fontWeight: "bold" },
});
