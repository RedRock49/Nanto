import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import Song from "../components/Song";

const LibraryScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    SplineSansRegular: require("../assets/fonts/SplineSans-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#F1F1F1' }}>
      <ScrollView style={{ width: "100%" }}>
        <Song
          songName="Song name"
          authorName="Author name"
          albumName="Album name"
        />
        <Song
          songName="Song name"
          authorName="Author name"
          albumName="Album name"
        />
      </ScrollView>
    </View>
  );
};
export default LibraryScreen;
