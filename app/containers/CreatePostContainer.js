import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";

export default function CreatePostContainer() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.profileHolder}>
          <ImageBackground
            resizeMode="contain"
            source={require("../assets/0.png")}
            style={styles.profile}
          />
        </View>
        <View style={styles.textInputHolder}>
          <TextInput
            placeholder="Create a new post"
            placeholderTextColor="#BDBDBD"
            style={styles.textInput}
          ></TextInput>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.iconBar}>
        <View style={styles.iconHolder}>
          <ImageBackground
            resizeMode="contain"
            style={styles.iconBarIcon}
            source={require("../assets/photograph.png")}
          />
        </View>
        <View style={styles.iconHolder}>
          <ImageBackground
            resizeMode="contain"
            style={styles.iconBarIcon}
            source={require("../assets/video-camera.png")}
          />
        </View>
        <View style={styles.iconHolder}>
          <ImageBackground
            resizeMode="contain"
            style={styles.iconBarIcon}
            source={require("../assets/audio.png")}
          />
        </View>
        <View style={styles.iconHolder}>
          <ImageBackground
            resizeMode="contain"
            style={styles.iconBarIcon}
            source={require("../assets/google-docs.png")}
          />
        </View>
        <View style={styles.iconHolder}>
          <ImageBackground
            resizeMode="contain"
            style={styles.iconBarIcon}
            source={require("../assets/google-sheets.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    backgroundColor: "#F6F9FC",
    paddingHorizontal: 15,
    paddingBottom: 20,
    borderColor : "#f8f8f8",
    borderWidth : 3
  },
  inputContainer: {
    justifyContent: "flex-start",
    marginVertical: 20,
    flexDirection: "row",
  },
  profile: {
    flex: 1,
  },
  profileHolder: {
    width: 38,
    height: 38,
    borderRadius: 50,
    overflow: "hidden",
  },
  textInputHolder: {
    marginLeft: 20,
    justifyContent: "center",
    flex: 1,
  },
  textInput: {
    width: "100%",
    fontWeight: "700",
    fontSize: 15,
    alignSelf: "center",
  },
  divider: {
    backgroundColor: "#EBEDF2",
    width: "100%",
    height: 2,
  },
  iconBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  iconBarIcon: {
    flex: 1,
  },
  iconHolder: {
    width: 22,
    height: 22,
  },
});
