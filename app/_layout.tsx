import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerTransparent: true,
      title: ''
    }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="sign" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack >
  )
}
