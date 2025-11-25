import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Page4() {
  const router = useRouter();
  return (
    <View style={{ padding: 20 }}>
      <Text>Page 4</Text>
      <Button title="Retour" onPress={() => router.back()} />
      <Text></Text>
      <Button title="Aller à Page 5" onPress={() => router.push("/page5")} />
    </View>
  );
}
