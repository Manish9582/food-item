import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
     headerTransparent:true,
     title:''
    }}>
      <Stack.Screen name="index" options={{headerShown:false}}/>
      <Stack.Screen name="sign" />
      <Stack.Screen name="login" />
    </Stack >
  )
}
