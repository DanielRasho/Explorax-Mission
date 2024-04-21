import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import { Theme } from "../../constants/theme";
import IconButton from "../atoms/IconButton";
import OptionIcon from "../../assets/images/menu/othersBtn.svg";
import Separator from "../atoms/Separator";

const coinImage = require("../../assets/images/coin.png");
const planetImage = require("../../assets/images/planet.png");

export default function GameStatusBar() {
  const rotateValue = useRef(new Animated.Value(0)).current;
  const planetAnim = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 15000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  }, [rotateValue]);

  return (
    <View style={[styles.topBarContainer]}>
      {/* PLANET DISPLAY */}
      <Animated.View
        style={[
          styles.planetContainer,
          { transform: [{ rotateZ: planetAnim }] },
        ]}
      >
        <Image source={planetImage} style={[styles.planetImage]} />
      </Animated.View>
      <View style={[styles.options]}>
        {/* SCORE COUNTER */}
        <View style={[styles.score]}>
          <Text style={[styles.scoreText]}>00032</Text>
          <Image source={coinImage} style={[styles.coinImage]} />
        </View>
        <Separator width={8} />
        <IconButton
          IconSvg={OptionIcon}
          width={30}
          height={30}
          frontColor={Theme.colors.orange}
          edgeColor={Theme.colors.darkOrange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBarContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "10%",
    paddingHorizontal: "2%",
    zIndex: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  planetContainer: {
    width: 100,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  planetImage: {
    width: "100%",
    resizeMode: "contain",
  },
  options: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  score: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  coinImage: {
    position: "absolute",
    resizeMode: "contain",
    width: 30,
    left: -10,
  },
  scoreText: {
    backgroundColor: Theme.colors.darkBlue,
    color: Theme.colors.white,
    overflow: "hidden",
    borderRadius: 20,
    paddingLeft: 30,
    paddingRight: 10,
    fontWeight: Theme.fontWeight.bold,
    fontSize: Theme.fontSizes.text,
  },
});
