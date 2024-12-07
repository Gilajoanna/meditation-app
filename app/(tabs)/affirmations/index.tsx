import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import AffirmationsGallery from "@/components/AffirmationsGallery";

// UI and functionality for affirmations screen
const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2A3335", "#5A6C57", "#85A98F", "#D3F1DF"]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <Text className="text-white text-2xl mt-5 mb-7 opacity-80 font-montsSB">
            SHIFT YOUR WAY OF THINKING WITH AFFIRMATIONS.
          </Text>
          <View>
            {/* Mapping over the affirmation gallery data to render affirmation galleries. */}
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
