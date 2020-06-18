import React from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
  ImageBackground,
} from "react-native";
import ReadMore from "react-native-read-more-text";

let statusHeight = StatusBar.currentHeight;

export default function Post(props) {
  let {
    item: {
      avatar,
      postedBy,
      postedOn,
      imageUri,
      description,
      likes,
      comment,
      views,
    },
  } = props;

  let _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{color: Colors.tintColor, marginTop: 5}} onPress={handlePress}>
        Read more
      </Text>
    );
  }
 
  let _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{color: Colors.tintColor, marginTop: 5}} onPress={handlePress}>
        Show less
      </Text>
    );
  }
 
  let _handleTextReady = () => {
  }

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
          source={{ uri: imageUri }}
          style={{ flex: 1, width: "100%", height: 200 }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.descriptionContainer}>
        {/* <Text numberOfLines={4} style={styles.description}>{description}</Text>
        <Text style={{ color: "red" }}>Continue Reading</Text> */}
        <ReadMore
          numberOfLines={4}
          renderTruncatedFooter={_renderTruncatedFooter}
          renderRevealedFooter={_renderRevealedFooter}
          onReady={_handleTextReady}
        >
          <Text style={styles.description}>{description}</Text>
        </ReadMore>
      </View>
      <View style={styles.divider} />
      <View style={styles.postMeta}>
        <View style={styles.leftIcons}>
          <View style={styles.iconWithText}>
            <Image
              style={styles.iconBarIcon}
              source={require("../assets/heart.png")}
            />
            <Text style={[styles.iconText, styles.secondaryHeading]}>
              {likes}
            </Text>
          </View>
          <View style={styles.iconWithText}>
            <Image
              style={styles.iconBarIcon}
              source={require("../assets/comment.png")}
            />
            <Text style={[styles.iconText, styles.secondaryHeading]}>
              {comment}
            </Text>
          </View>
        </View>
        <View style={styles.rightIcon}>
          <View style={styles.iconWithText}>
            <Image
              style={styles.iconBarIcon}
              source={require("../assets/eye.png")}
            />
            <Text style={[styles.iconText, styles.secondaryHeading]}>
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
    margin: 10,
    borderColor: "#afafaf",
    borderWidth: 1,
    borderRadius: 5,
  },
  leftIcons: {
    flexDirection: "row",
  },
  rightIcon: {},
  iconWithText: {
    flexDirection: "row",
  },
  iconText: {
    marginHorizontal: 5,
  },
  header: {
    flexDirection: "row",
    padding: 15,
  },
  avatarContainer: {
    width: 50,
    height: 50,
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
    fontSize: 18,
    color: "dodgerblue",
    fontWeight: "bold",
  },
  secondaryHeading: {
    color: "#afafaf",
  },
  imageDisplay: {},
  descriptionContainer: {
    padding: 15,
  },
  description: { color: "#6e6e6e" },
  postMeta: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  divider: {
    backgroundColor: "#efefef",
    height: 1,
    marginHorizontal: 15,
  },
  iconBarIcon: {
    width: 20,
    height: 20,
  },
});
