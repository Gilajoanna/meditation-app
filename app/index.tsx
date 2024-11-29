import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/meditation-images/ancient-enchanted-forest.png")}
        style={styles.backgroundImage}
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.6)"]}>
          <SafeAreaView style={styles.safeArea}>
            <View>
              <Text style={styles.titleText}>Simple Meditation</Text>
              <Text style={styles.subText}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: "space-between",
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
  },
  subText: {
    color: "white",
    fontWeight: "light",
    fontSize: 14,
    textAlign: "center",
    paddingTop: 10,
  },
});

export default App;
