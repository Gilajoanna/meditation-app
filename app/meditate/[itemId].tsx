import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useEffect } from "react";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import {
  MEDITATION_DATA,
  AUDIO_FILES,
} from "@/constants/models/MeditationData";
import useMeditationTimer from "@/hooks/useMeditationTimer";
import useMeditationAudio from "@/hooks/useMeditationAudio";

// Dynamic route for meditation detail screen. Different for each meditation item.
const MeditationPractice = () => {
  const { itemId } = useLocalSearchParams();

  const {
    duration,
    isMeditating,
    setMeditating,
    toggleMeditationSession,
    resetTimer,
    formattedMinutes,
    formattedSeconds,
  } = useMeditationTimer(30);

  const audioFileName = MEDITATION_DATA[Number(itemId) - 1].audio;
  const { toggleAudioSound, isAudioPlaying, setAudioPlaying, audioSound } =
    useMeditationAudio(AUDIO_FILES[audioFileName]);

  useEffect(() => {
    if (duration === 0 || !isMeditating) {
      //console.log("IS DURATION 0:", duration);
      if (isAudioPlaying) audioSound?.pauseAsync();
      setMeditating(false);
      setAudioPlaying(false);
      return;
    }
  }, [duration, audioSound]);

  const handleToggleMeditation = async () => {
    toggleMeditationSession();
    await toggleAudioSound();
  };

  const handleAdjustDuration = () => {
    if (isMeditating) {
      toggleMeditationSession();
    }

    router.push("/adjust-meditation-duration");
  };

  useEffect(() => {
    return () => {
      resetTimer();
      //console.log("USEFFECT WITH RESEST TIMER", duration);
    };
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(itemId) - 1]} // Need to cast it to a number and -1 to get the correct index.
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
          <Pressable
            onPress={async () => {
              if (isAudioPlaying) {
                await toggleAudioSound();
              }
              router.back();
            }}
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
