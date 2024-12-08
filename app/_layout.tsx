import { SplashScreen, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import TimerProvider from "@/context/TimerContext";

// Root layout for the app. Wrapper for all screens, sets root navigation.
// StackLayout displays its children in a stack on top of each other.

// Prevents the splash screen from hiding until all font assets are loaded.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Loading custom font for the app. Since this is an asyncronous operation, we have it in a useEffect hook.
  const [fontsLoaded, error] = useFonts({
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
  });

  // Throws error if error or hides splash screen when fonts are loaded.
  useEffect(() => {
    if (error) {
      console.error("Error loading fonts: ", error);
      throw error;
    }

    if (fontsLoaded) {
      console.log("Fonts loaded");
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]); // Only runs when fontsLoaded or error changes.

  if (!fontsLoaded) return null;
  if (!fontsLoaded && !error) return null;

  return (
    // Wrap with TimerProvider context to manage the timer state.
    <TimerProvider>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="meditate/[itemId]"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(modal)/adjust-meditation-duration"
            options={{ headerShown: false, presentation: "modal" }}
          />
        </Stack>
      </SafeAreaProvider>
    </TimerProvider>
  );
}
