import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";

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
      <Text>AffirmationPractice</Text>
    </View>
  );
};

export default AffirmationPractice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
