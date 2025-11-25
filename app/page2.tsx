import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Page2() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Page 2</Text>
      <Button title="Aller à Page 3" onPress={() => router.push("/page3")} />
    </View>
  );
}
