import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";


export default function Service({ pending = 0, totalCount = 0, name = "" ,imageUri}) {
 
  return (
    <View style={styles.service}>
      <ImageBackground
        resizeMode="contain"
        source={imageUri}
        style={styles.background}
      >
        <View style={styles.flexed}>
          <View style={styles.pending}>
            <Text style={styles.textWhite}>Pending: {pending}</Text>
          </View>
        </View>
        <Text style={[styles.textWhite, styles.totalCount]}>{totalCount}</Text>
        <Text style={[styles.textWhite, styles.serviceName]}>{name}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  flexed: {
    flex: 1,
  },
  service: {
    width: "45%",
    height: 100,
    marginVertical: "2%",
    borderRadius: 10,
    overflow: "hidden",
  },
  background: {
    flex: 1,
    paddingLeft: 15,
    paddingVertical : 10
  },
  pending: {
    position: "absolute",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,225,0.2)",
    top : 5,
    right: 10,
  },
  textWhite: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  totalCount: {
    fontSize: 22,
  },
  serviceName: {
    fontSize: 16,
  },
});
