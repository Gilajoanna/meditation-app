import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

import forestImage from "@/assets/meditation-images/ancient-enchanted-forest.png";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={forestImage} resizeMode="cover">

        <Text>App</Text>
      </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
      flex: 1,
      resizeMode: "cover",
  },
    });
