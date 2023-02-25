import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

const Song = (props) => {
  return (
    <View style={styles.songContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://i.imgur.com/1bX5QH6.jpg" }}
          style={styles.songImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{props.songName}</Text>
        <Text style={styles.authorAlbumName}>
          {props.authorName + " • " + props.albumName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  songContainer: {
    justifyContent: "left",
    alignItems: "center",
    height: 70,
    borderBottomColor: "#AAAAAA",
    borderBottomWidth: 0.7,
    flexDirection: "row",
    backgroundColor: "white",
  },
  textContainer: {
    justifyContent: "center",
    width: '60%'
  },
  songImage: {
    height: 42,
    width: 42,
    borderRadius: 3,
    marginHorizontal: 14,
    shadowOffset: {
      width: -7,
      height: -7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
  imageContainer: {
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  name: {
    textAlign: "left",
    color: "black",
    fontSize: 16,
    fontFamily: "SplineSansRegular",
    marginBottom: 2,
  },
  authorAlbumName: {
    textAlign: "left",
    color: "#6D6D6D",
    fontSize: 14,
    fontFamily: "SplineSansRegular",
  },
});

export default Song;
