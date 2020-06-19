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
import Footer from "../components/Footer";

let statusHeight = StatusBar.currentHeight;

export default function MainScreen() {
  let posts = (post, index) => {
    return <Post {...post} key={index} />;
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          contentContainerStyle = {{marginBottom:100}}
          ListHeaderComponent={
            <>
              <Header title={"Activity"} />
              <Services />
              <CreatePost />
            </>
          }
          data={dummydata.posts}
          renderItem={posts}
        ></FlatList>
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    marginTop: statusHeight +10,
    justifyContent: "flex-start",
  },
});
