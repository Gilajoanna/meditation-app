import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import { Audio } from "expo-av";
import {
  MEDITATION_DATA,
  AUDIO_FILES,
} from "@/constants/models/MeditationData";
import useMeditationTimer from "@/hooks/useMeditationTimer";

// Dynamic route for meditation detail screen. Different for each meditation item.
const MeditationPractice = () => {
  const { itemId } = useLocalSearchParams();
  const {
    duration,
    isMeditating,
    toggleMeditationSession,
    resetTimer,
    formattedMinutes,
    formattedSeconds,
  } = useMeditationTimer(30);

  const [audioSound, setAudioSound] = useState<Audio.Sound>();
  const [isAudioPlaying, setAudioPlaying] = useState(false);

  const handleToggleMeditation = async () => {
    toggleMeditationSession();
    await toggleAudioSound();
    console.log(isMeditating);
  };

  /******** AUDIO FUNCTIONALITY */

  const toggleAudioSound = async () => {
    const sound = audioSound ? audioSound : await initializeAudioSound();
    const status = await sound.getStatusAsync();

    if (status.isLoaded && !isAudioPlaying) {
      await sound.playAsync();
      setAudioPlaying(true);
    } else {
      await sound.pauseAsync();
      setAudioPlaying(false);
    }
  };

  const initializeAudioSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(itemId) - 1].audio;

    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);

    setAudioSound(sound);
    return sound;
  };

  const handleAdjustDuration = () => {
    if (isMeditating) {
      handleToggleMeditation();
    }

    router.push("/adjust-meditation-duration");
  };

  useEffect(() => {
    return () => {
      resetTimer();
      audioSound?.unloadAsync();
    };
  }, [audioSound]);

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
              <Text className="text-4xl text-gray-900 font-montsR">
                {formattedMinutes}:{formattedSeconds}
              </Text>
            </View>
          </View>

          <View>
            <CustomButton
              title="Adjust Duration"
              onPress={handleAdjustDuration}
              containerStyles="mb-5"
            />
            <CustomButton
              title={isMeditating ? "Stop Meditation" : "Start Meditation"}
              onPress={handleToggleMeditation}
              containerStyles="mb-5"
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default MeditationPractice;
