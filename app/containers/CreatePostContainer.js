import React from "react";
import { StyleSheet, View, ImageBackground,Image, TextInput } from "react-native";

export default function CreatePostContainer() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.profileHolder}>
          <ImageBackground
            resizeMode="contain"
            source={require("../assets/dummy-profile.png")}
            style={styles.profile}
          />
        </View>
        <View style={styles.textInputHolder}>
          <TextInput
            placeholder="Create a new post"
            placeholderTextColor="#E0E2E4"
            style={styles.textInput}
          ></TextInput>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.iconBar}>
        <Image style={styles.iconBarIcon} source={require("../assets/photograph.png")}/>
        <Image style={styles.iconBarIcon}  source={require("../assets/video-camera.png")}/>
        <Image style={styles.iconBarIcon}  source={require("../assets/audio.png")}/>
        <Image style={styles.iconBarIcon}  source={require("../assets/photograph.png")}/>
        <Image style={styles.iconBarIcon}  source={require("../assets/google-docs.png")}/>
        <Image style={styles.iconBarIcon}  source={require("../assets/google-sheets.png")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "aliceblue",
    paddingHorizontal: 15,
    paddingBottom: 20,
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
    width: 50,
    height: 50,
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
    // fontWeight: "bold",
    fontSize: 15,
    alignSelf: "center",
  },
  divider: {
    backgroundColor: "#efefef",
    width: "100%",
    height: 2,
  },
  iconBar: {
      flexDirection : "row",
      justifyContent : "space-between",
      paddingTop : 10,
      paddingHorizontal : 10
  },
  iconBarIcon : {
    width : 20,
    height :20
  }
});
