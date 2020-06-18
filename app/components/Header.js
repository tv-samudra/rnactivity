import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

let statusHeight = StatusBar.currentHeight;

export default function MainScreen({ title = "Title" }) {
  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    padding : 15,
  },
});
