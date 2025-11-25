import { View, Text, Button } from "react-native";
import { useRouter,  Link } from "expo-router";

export default function Page2() {
  const router = useRouter();
  return (
    <View style={{ padding: 20 }}>
      <Text>Page 2</Text>
      <Button title="Aller à Page 3" onPress={() => router.push("/page3")} />
      <Link href="./" style={{ marginTop: 20, color: "blue", textDecorationLine: "underline" }}>
        Aller à Page 1 (index)
      </Link>
    </View>
  );
}
