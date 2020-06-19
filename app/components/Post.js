import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function Post(props) {
  let {
    item: {
      avatar,
      postedBy,
      postedOn,
      imageUri,
      description,
      likes,
      comments,
      views,
    },
  } = props;

  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <ImageBackground
            resizeMode="cover"
            source={avatar}
            style={styles.avatar}
          ></ImageBackground>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.primaryHeading}>{postedBy}</Text>
          <Text style={styles.secondaryHeading}>{postedOn}</Text>
        </View>
      </View>
      <View style={styles.imageDisplay}>
        <ImageBackground
          source={imageUri}
          style={{ flex: 1, width: "100%", height: 225 }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text numberOfLines={4} style={styles.description}>
          {description}<Text style={{ color: "red" }}>Continue Reading</Text> 
        </Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.postMeta}>
        <View style={styles.leftIcons}>
          <View style={styles.iconWithText}>
            <View style={styles.iconHolder}>
              <ImageBackground
                resizeMode="contain"
                style={styles.iconBarIcon}
                source={require("../assets/heart.png")}
              />
            </View>
            <Text style={[styles.iconText, styles.secondaryHeading,{color:"tomato"}]}>
              {likes}
            </Text>
          </View>
          <View style={styles.iconWithText}>
            <View style={styles.iconHolder}>
              <ImageBackground
                resizeMode="contain"
                style={styles.iconBarIcon}
                source={require("../assets/comment.png")}
              />
            </View>
            <Text style={[styles.iconText, styles.secondaryHeading]}>
              {comments}
            </Text>
          </View>
        </View>
        <View style={styles.rightIcon}>
          <View style={styles.iconWithText}>
            <View style={styles.iconHolder}>
              <ImageBackground
                resizeMode="contain"
                style={styles.iconBarIcon}
                source={require("../assets/eye.png")}
              />
            </View>
            <Text style={[styles.secondaryHeading,styles.iconText]}>
              Views : ({views})
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    fontSize: 28,
    fontWeight: "bold",
    margin: 20,
    borderColor: "#EBEDF2",
    borderWidth: 1,
    borderRadius: 5,
  },
  iconHolder: {
    width: 20,
    height: null,
    marginRight : 2
  },
  leftIcons: {
    flexDirection: "row",
  },
  rightIcon: {},
  iconWithText: {
    flexDirection: "row",
    alignContent:"center",
    marginRight : 15
  },
  iconText: {
    marginHorizontal: 5,
  },
  header: {
    flexDirection: "row",
    padding: 15,
  },
  avatarContainer: {
    width: 45,
    height: 45,
    backgroundColor: "dodgerblue",
    borderRadius: 50,
    overflow: "hidden",
  },
  avatar: {
    flex: 1,
  },
  headingContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 10,
  },
  primaryHeading: {
    fontSize: 16,
    color: "#3B86E0",
    fontWeight: "bold",
  },
  secondaryHeading: {
    color: "#BDBDBD",
    fontWeight: "600",
  },
  imageDisplay: {},
  descriptionContainer: {
    padding: 15,
  },
  description: {
    color: "#707070",
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "600",
  },
  postMeta: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 20,
    marginHorizontal: 10,
  },
  divider: {
    backgroundColor: "#efefef",
    height: 1,
    marginHorizontal: 15,
  },
  iconBarIcon: {
    flex: 1,
  },
});
