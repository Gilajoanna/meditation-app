import { LinearGradient } from "expo-linear-gradient";
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
              <Text style={styles.text}>App</Text>
            </View>
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
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
  },
});

export default App;
