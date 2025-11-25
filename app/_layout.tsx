import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen 
        name="index" 
        options={{ 
          title: "Drawer - Page 1",
          drawerLabel: "Page 1",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="page2" 
        options={{ 
          title: "Drawer - Page 2",
          drawerLabel: "Page 2",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }} 
      />
      <Drawer.Screen
        name="page3"
        options={{
          title: "Drawer - Page 3",
          drawerLabel: "Page 3",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="page4" 
        options={{ 
          title: "Drawer - Page 4",
          drawerLabel: "Page 4",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }} 
      />
      <Drawer.Screen
        name="page5"
        options={{
          headerShown: false,
          drawerLabel: "Page 5 (no header)",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}