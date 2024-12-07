import React from "react";
import { Stack } from "expo-router";

// Configures the layout for nested screens within the Meditation folder.
const MeditateLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[itemId]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MeditateLayout;
