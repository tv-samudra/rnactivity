import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

let footerBg = require("../assets/path.png");
let compassIcon = require("../assets/compass.png");
let searchIcon = require("../assets/search.png");
let mailIcon = require("../assets/email.png");
let userIcon = require("../assets/user.png");

export default function Footer() {
  return (
    <LinearGradient
      colors={["rgba(255,255,255,0)","rgba(255,255,255,0.3)","rgba(255,255,255,0.9)","rgba(255,255,255,1)"]}
      style={{
        position: "absolute",
        width : "100%",
        bottom :0,
        height :150,paddingVertical : 15
      }}
    >
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
    </LinearGradient>
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
