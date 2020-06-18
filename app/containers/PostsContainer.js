import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Post from "../components/Post";
import Dummydata from "../dummydata";

export default function PostContainer() {
  return (
    <FlatList>
      {Dummydata.posts.map((post, key) => (
        <Post {...post} key={key} />
      ))}
    </FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});
