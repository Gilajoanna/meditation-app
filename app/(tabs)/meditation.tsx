import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";
import { MEDITATION_DATA } from "@/constants/models/MeditationData";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const Meditate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#344C64", "#577B8D", "#57A6A1"]}>
        <View className="mt-5 mb-5">
          <Text className="text-white text-3xl mb-2 opacity-80 font-montsSB">
            WELCOME, GILA
          </Text>
          <Text className="text-white text-lg font-medium opacity-80 font-montsR">
            Begin your meditation journey today.
          </Text>
        </View>

        <View>
          <FlatList
            className="mt-3 mb-5"
            showsVerticalScrollIndicator={false}
            data={MEDITATION_DATA}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable
                className="flex-1 h-48 my-3 mx-1 rounded-xl overflow-hidden border border-white"
                onPress={() => router.push(`/meditate/${item.id}`)}
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  className="flex-1 h-full w-full justify-center"
                >
                  <LinearGradient
                    colors={["transparent", "rgba(0, 0, 0 , 0.5)"]}
                    style={styles.listItemGradient}
                  >
                    <Text className="text-white font-bold text-2xl font-montsR">
                      {item.title.toLocaleUpperCase()}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>

      <StatusBar style="light" />
    </View>
  );
};

export default Meditate;

const styles = StyleSheet.create({
  listItemGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
