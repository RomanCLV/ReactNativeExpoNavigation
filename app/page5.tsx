import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Page5() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Page 5 - No header & bar</Text>
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => router.back()}
      >
        <Text style={{ color: "blue" }}>Retour</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
