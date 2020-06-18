import React from "react";
import { StyleSheet, View } from "react-native";

import Service from "../components/Service";

import Dummy from "../dummydata";

export default function Services() {
  return (
    <View style={styles.container}>
      {Dummy.services.map((service, key) => (
        <Service key={key} {...service} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#000",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginVertical: 10,
  },
});
