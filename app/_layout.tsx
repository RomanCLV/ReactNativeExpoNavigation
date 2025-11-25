import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Tabs - Page 1" }} />
      <Tabs.Screen name="page2" options={{ title: "Tabs - Page 2" }} />
      <Tabs.Screen name="page3" options={{ title: "Tabs - Page 3" }} />
    </Tabs>
  );
}
