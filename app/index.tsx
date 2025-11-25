import { View, Text, Button } from "react-native";
import { useRouter , Link } from "expo-router";

export default function Page1() {
  const router = useRouter();
  return (
    <View style={{ padding: 20 }}>
      <Text>Page 1</Text>
      <Button title="Aller à Page 2" onPress={() => router.push("/page2")} />
      <Link href="/page2" style={{ marginTop: 20, color: "blue", textDecorationLine: "underline" }}>
        Aller à Page 2
      </Link>
    </View>
  );
}
