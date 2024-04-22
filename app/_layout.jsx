import React, { useState, useRef, useEffect } from "react";
import { Slot, router } from "expo-router";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import BottomNavBar from "../components/molecules/BottomNavMenu";
import GameStatusBar from "../components/molecules/GameStatusBar";
import TransitionScreen from "../components/atoms/TransitionScreen";
import { useStore } from "zustand";
import { useNavigateWithTransition } from "../stores/navigate";

const background = require("../assets/images/spaceBackground.png");
const circle1 = require("../assets/images/menu/circle2.png");
const circle2 = require("../assets/images/menu/circle1.png");
const circle3 = require("../assets/images/menu/circle4.png");

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function GameLayout() {
  const setNavigateWithTransition = useNavigateWithTransition(
    (state) => state.setNavigate,
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [route, setRoute] = useState("/");

  useEffect(() => {
    setNavigateWithTransition((route) => {
      setRoute(route);
      startAnimation();
    });
  });

  const startAnimation = () => {
    setIsTransitioning(true);
  };
  const onScreenCover = () => {
    router.replace(route);
  };
  const onTransitionComplete = () => {
    setIsTransitioning(false);
  };

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.bottomCircleContainer}>
        <View style={[styles.circle, styles.circle1]}>
          <Image source={circle1} style={styles.circleImage} />
        </View>
        <View style={[styles.circle, styles.circle2]}>
          <Image source={circle2} style={styles.circleImage} />
        </View>
        <View style={[styles.circle, styles.circle3]}>
          <Image source={circle3} style={styles.circleImage} />
        </View>
      </View>
      <Slot />
      <BottomNavBar />
      <GameStatusBar />
      <StatusBar hidden />
      {isTransitioning ? (
        <TransitionScreen
          isTransitioning={isTransitioning}
          onScreenCover={onScreenCover}
          onTransitionComplete={onTransitionComplete}
        />
      ) : null}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
  },
  bottomCircleContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  circle: {
    position: "absolute",
    width: "100%",
    height: "45%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  circle1: {
    bottom: -(windowHeight * 0.1),
  },
  circle2: {
    bottom: -(windowHeight * 0.2),
  },
  circle3: {
    bottom: -(windowHeight * 0.25),
  },
  circleImage: {
    flex: 1,
    resizeMode: "center",
    height: undefined,
  },
});
