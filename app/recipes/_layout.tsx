import { Stack } from "expo-router";

export default function RecipesLayout() {
  return (
    <Stack>
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
