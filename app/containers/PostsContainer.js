import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Post from "../components/Post";
import Dummydata from "../dummydata";

export default function PostContainer() {
  return (
    <FlatList style={styles.container}>
      {Dummydata.posts.map((post, key) => (
        <Post {...post} key={key} id={key}/>
      ))}
    </FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "flex-start",
    marginVertical : 10,
  },
});
