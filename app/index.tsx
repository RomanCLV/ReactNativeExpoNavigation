import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Page1() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Page 1</Text>
      <Button title="Aller à Page 2" onPress={() => router.push("/page2")} />
    </View>
  );
}
