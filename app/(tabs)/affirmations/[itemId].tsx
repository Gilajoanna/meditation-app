import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
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

  useEffect(() => {
    // Loops through affirmation gallery. Each item represents a category with affirmations.
    // Access the affirmationData array in each category to find the affirmation with the matching id.
    // Set the matching affirmation to the state.
    for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
      const affirmationData = AFFIRMATION_GALLERY[i].data;

      const affirmationToStart = affirmationData.find(
        (affirmation) => affirmation.id === Number(itemId)
      );

      if (affirmationToStart) {
        setAffirmation(affirmationToStart);
        return;
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={affirmation?.image}
        style={styles.backgroundImage}
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.7)"]}>
          <Pressable onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={32} color="white" />
          </Pressable>

          <View style={styles.textContainer}>
            <Text>{affirmation?.text}</Text>
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  textContainer: {
    height: "75%",
    justifyContent: "center",
  },
  affirmationText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
});
