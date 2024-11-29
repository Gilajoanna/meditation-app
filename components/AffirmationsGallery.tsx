import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { Link } from "expo-router";

interface AffirmationsGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const AffirmationsGallery = ({ title, previews }: AffirmationsGalleryProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.listView}>
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}` as string} asChild>
              <Pressable>
                <View style={styles.listViewItem}>
                  <Image source={item.image} style={styles.listViewItemImage} />
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default AffirmationsGallery;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  textContainer: {
    marginBottom: 10,
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    opacity: 0.8,
  },
  listView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  listViewItem: {
    height: 160,
    width: 150,
    marginRight: 5,
  },
  listViewItemImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
});