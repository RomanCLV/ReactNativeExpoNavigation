import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Stack - Page 1" }} />
      <Stack.Screen name="page2" options={{ title: "Stack - Page 2" }} />
      <Stack.Screen name="page3" options={{ title: "Stack - Page 3" }} />
    </Stack>
  );
}
