import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import AffirmationsGallery from "@/components/AffirmationsGallery";

const Affirmations = () => {
  return (
    <View style={styles.container}>
      <AppGradient colors={["#3B1C32", "#6A1E55", "#A64D79"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.titleText}>
            Shift your way of thinking with affirmations.
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((gallery) => (
              <AffirmationsGallery
                key={gallery.title}
                title={gallery.title}
                previews={gallery.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "left",
    marginBottom: 5,
    opacity: 0.8,
  },
});
