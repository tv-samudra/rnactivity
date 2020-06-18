import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

const Backgrounds = [
  require("../assets/orange.png"),
  require("../assets/gold.png"),
  require("../assets/brick.png"),
  require("../assets/darkblue.png"),
  require("../assets/darkviolet.png"),
  require("../assets/lightviolet.png"),
];

export default function Service({ pending = 0, totalCount = 0, name = "" }) {
  /**get a random background from available backgrounds */
  let background =
    Backgrounds[Math.floor(Math.random() * Backgrounds.length )];
  return (
    <View style={styles.service}>
      <ImageBackground
        resizeMode="contain"
        source={background}
        style={styles.background}
      >
        <View style={styles.flexed}>
          <View style={styles.pending}>
            <Text style={styles.textWhite}>Pending: {pending}</Text>
          </View>
        </View>
        <Text style={[styles.textWhite, styles.totalCount]}>{totalCount}</Text>
        <Text style={[styles.textWhite, styles.serviceName]}>{name}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  flexed: {
    flex: 1,
  },
  service: {
    maxWidth: 190,
    height: 100,
    marginVertical: 3,
    borderRadius: 10,
    overflow: "hidden",
  },
  background: {
    flex: 1,
    padding: 15,
  },
  pending: {
    position: "absolute",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,225,0.2)",
    right: 10,
  },
  textWhite: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#efefef",
  },
  totalCount: {
    fontSize: 22,
  },
  serviceName: {
    fontSize: 15,
  },
});
