import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

let footerBg = require("../assets/path.png");
let compassIcon = require("../assets/compass.png");
let searchIcon = require("../assets/search.png");
let mailIcon = require("../assets/email.png");
let userIcon = require("../assets/user.png");

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.iconBar}>
        <View style={styles.imageDisplay}>
          <ImageBackground
            source={compassIcon}
            style={{ flex: 1 }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.imageDisplay}>
          <ImageBackground
            source={searchIcon}
            style={{ flex: 1 }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.imageDisplay}>
          <ImageBackground
            source={mailIcon}
            style={{ flex: 1 }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.imageDisplay}>
          <ImageBackground
            source={userIcon}
            style={{ flex: 1 }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    paddingTop: 50,
    paddingBottom: 10,
  },
  footerBg: {
    width: "100%",
  },
  iconBar: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    alignContent: "flex-end",
  },
  imageDisplay: {
    width: 26,
    height: 26,
  },
});
