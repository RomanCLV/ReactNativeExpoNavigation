import { View, Text, Button } from "react-native";
import { useRouter, Link } from "expo-router";

export default function Page3() {
  const router = useRouter();
  return (
    <View style={{ padding: 20 }}>
      <Text>Page 3  - No menu</Text>
      <Button title="Retour" onPress={() => router.back()} />
      <Text></Text>
      <Button title="Aller à Page4" onPress={() => router.push("/page4")} />
      <Link href="/page4" style={{ marginTop: 20, color: "blue", textDecorationLine: "underline" }}>
        Page 4
      </Link>
    </View>
  );
}
