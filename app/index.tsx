import CustomButton from "@/components/CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require("@/assets/meditation-images/ancient-enchanted-forest.png")}
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
          style={styles.gradient}
        >
          {/* Overlay content */}
          <SafeAreaView style={styles.safeArea}>
            <View>
              <Text style={styles.titleText}>Simple Meditation</Text>
              <Text style={styles.subText}>The best meditation is effortless.</Text>
            </View>

            <View>
              <CustomButton onPress={() => console.log("Button pressed")} title="Get Started" />
            </View>

            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
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
    marginHorizontal: 20,
    marginVertical: 25,
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    marginVertical: 10,
  },
  subText: {
    color: "white",
    fontWeight: "light",
    fontSize: 14,
    textAlign: "center",
  },
});

export default App;
