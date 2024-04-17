import React, { useState } from "react";
import { Slot } from "expo-router";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import BottomNavBar from "../components/BottomNavMenu";

const background = require("../assets/images/spaceBackground.png");

export default function GameLayout() {
  const [hello, setHello] = useState("Hello?");
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.background}
    >
      <View>
        <Text>hello</Text>
      </View>
      <Slot />
      <BottomNavBar />

      <StatusBar hidden />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
});
