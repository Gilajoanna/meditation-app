import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";

// Dynamic route for meditation detail screen. Different for each meditation item.
const Meditate = () => {
  const { itemId } = useLocalSearchParams();
  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [isMeditating, setMeditating] = useState(false);

  // Runs whenever the secondsRemaining state changes.
  // When isMeditating is true we set this timer to update the state every second and decrease the secondsRemaining by 1.
  // When the secondsRemaining reaches 0, the timer stops and isMeditating is false. Same if user leaves the screen.
  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (secondsRemaining === 0) {
      setMeditating(false);
      return;
    }

    if (isMeditating) {
      timerId = setTimeout(() => {
        setSecondsRemaining(secondsRemaining - 1);
      }, 1000); // Passing 1000ms (1 second) to update the state every second.
    }

    return () => clearTimeout(timerId);
  }, [secondsRemaining, isMeditating]);

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(itemId) - 1]} // Need to cast it to a number and -1 to get the correct index.
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

          {/* Countdown timer for meditation */}
          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full h-44 w-44 justify-center items-center opacity-80">
              <Text className="text-4xl text-gray-900">
                00:{secondsRemaining}
              </Text>
            </View>

            <View className="mt-10">
              <CustomButton
                title="Start Meditation"
                onPress={() => setMeditating(true)}
                containerStyles="mb-5"
              />
            </View>
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
