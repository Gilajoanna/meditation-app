import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Entry point of the app.
const App = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground
        source={require("@/assets/meditation-images/ancient-enchanted-forest.png")}
        className="flex-1 w-full h-full"
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.6)"]}>
          <SafeAreaView className="flex-1 justify-between">
            <View>
              <Text className="text-white font-bold text-3xl text-center">
                Simple Meditation
              </Text>
              <Text className="text-white font-light text-md text-center mt-3">
                The best meditation is effortless.
              </Text>
            </View>

            <View>
              <CustomButton
                onPress={() => router.push("/nature-meditate")}
                title="Get Started"
              />
            </View>

            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
