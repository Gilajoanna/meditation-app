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
import { MEDITATION_DATA } from "@/constants/MeditationData";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";

const NatureMeditate = () => {
  return (
    <View style={styles.container}>
      <AppGradient colors={["#161b2e", "#344C64", "#577B8D", "#57A6A1"]}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Welcome, Gila</Text>
          <Text style={styles.subText}>
            Begin your meditation journey today.
          </Text>
        </View>

        <View>
          <FlatList
            style={styles.list}
            showsVerticalScrollIndicator={false}
            data={MEDITATION_DATA}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable
                style={styles.listItem}
                onPress={() => console.log("Pressed item")}
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  style={styles.listItemImage}
                >
                  <LinearGradient
                    colors={["transparent", "rgba(0, 0, 0 , 0.5)"]}
                    style={styles.listItemGradient}
                  >
                    <Text style={styles.listItemText}>{item.title}</Text>
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

export default NatureMeditate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    marginTop: 15,
    marginBottom: 5,
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "left",
    marginBottom: 5,
    opacity: 0.8,
  },
  subText: {
    color: "white",
    fontWeight: "medium",
    fontSize: 16,
    textAlign: "left",
    opacity: 0.8,
  },
  list: {
    marginTop: 20,
    marginBottom: 20,
  },
  listItem: {
    flex: 1,
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "white",
  },
  listItemImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  listItemText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  listItemGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
