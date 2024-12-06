import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const Meditate = () => {
  const { itemId } = useLocalSearchParams();

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(itemId) - 1]} // Cast it to a number and -1 to get the correct index.
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10"
          >
            <AntDesign name="arrowleft" size={32} color="white" />
          </Pressable>
          <Text>Meditate</Text>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
