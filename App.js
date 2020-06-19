import React, { useEffect, useState } from "react";
import MainScreen from "./app/containers/MainScreenContainer";
import * as Font from "expo-font";

export default function App() {
  let [isFontLoaded, setFontLoaded] = useState(false);
  /**Load custom fonts */
  useEffect(() => {
    Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Poppins: require("./app/assets/fonts/Poppins.ttf"),
    }).then((_) => setFontLoaded(true));
  }, []);

  return <>{isFontLoaded ? <MainScreen /> : null}</>;
}
