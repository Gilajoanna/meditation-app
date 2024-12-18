import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";

// Dynamic route for affirmation practice screen. Render screens with unique data based on the route.
// Accessible at /affirmations/1, /affirmations/2, etc.
const AffirmationPractice = () => {
  // To access the unique id of the affirmation.
  const { itemId } = useLocalSearchParams();

  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [affirmationSentences, setAffirmationSentences] = useState<string[]>();

  useEffect(() => {
    // Loops through affirmation gallery. Each item represents a category with affirmations.
    // Access the affirmationData array in each category to find the affirmation with the matching id.
    // Set the matching affirmation to the state.
    for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
      const affirmationData = AFFIRMATION_GALLERY[i].data;

      const chosenAffirmation = affirmationData.find(
        (affirmation) => affirmation.id === Number(itemId)
      );

      if (chosenAffirmation) {
        setAffirmation(chosenAffirmation);
        // Split the affirmation text by period to create an array of sentences.
        const affirmationsTextArray = chosenAffirmation.text.split(".");
        //console.log(affirmationsTextArray);

        // Remove the last element if it is an empty string.
        if (affirmationsTextArray[affirmationsTextArray.length - 1] === "") {
          affirmationsTextArray.pop();
        }

        setAffirmationSentences(affirmationsTextArray);
        return;
      }
    }
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1 h-full w-full"
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.7)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10"
          >
            <AntDesign name="arrowleft" size={32} color="white" />
          </Pressable>

          <View className="h-full justify-center">
            <View className="h-4/5 justify-center">
              {affirmationSentences?.map((sentence, index) => (
                <Text
                  key={index}
                  className="text-white text-2xl font-bold text-center mb-16"
                >
                  {sentence}.
                </Text>
              ))}
            </View>
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
