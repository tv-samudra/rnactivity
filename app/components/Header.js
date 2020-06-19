import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Header({ title = "Title" }) {
  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 26,
    color: "#212121",
    fontWeight: "bold",
    padding: 15,
  },
});
