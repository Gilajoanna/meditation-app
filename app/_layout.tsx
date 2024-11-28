import { Slot, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Root layout for the app. Parent of all other layouts.
// StackLayout displays its children in a stack on top of each other.
export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </SafeAreaProvider>
    )
}