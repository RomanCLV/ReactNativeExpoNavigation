import { View, Text, Button } from "react-native";
import { useRouter,  Link } from "expo-router";
import { useState } from "react";
import CustomModal from "../components/customModal";

export default function Page2() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <Text>Page 2</Text>
      <Button 
        title="Ouvrir la modale 🎭" 
        onPress={() => setModalVisible(true)}
        color="#9333ea"
      />
      <Text></Text>
      <Button title="Aller à Page 3" onPress={() => router.push("/page3")} />
      <Link href="./" style={{ marginTop: 20, color: "blue", textDecorationLine: "underline" }}>
        Aller à Page 1 (index)
      </Link>
      <CustomModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
      />
    </View>
  );
}
