import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";

import Header from "../components/Header";
import Services from "./ServicesContainer";
import CreatePost from "./CreatePostContainer";
import dummydata from "../dummydata";
import Post from "../components/Post";

let statusHeight = StatusBar.currentHeight;

export default function MainScreen() {
  let posts = (post, index) => {
    return <Post {...post} key={index} />;
  };

  return (
    <View style={styles.container}>
      <Header title={"Activity"} />
      <FlatList
        ListHeaderComponent={
          <>
            <Services />
            <CreatePost />
          </>
        }
        data={dummydata.posts}
        renderItem={posts}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: statusHeight,
    justifyContent: "flex-start",
  },
});
