import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import { Theme } from "../../constants/theme";
import PropTypes from "prop-types";

const appLogo = require("../../assets/images/LogoMono.png");

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const CircleMaxRadius = Math.hypot(windowHeight, windowWidth);

export default function TransitionScreen({
  isTransitioning,
  onScreenCover,
  onTransitionComplete,
}) {
  const bigCircleAnim = useRef(new Animated.Value(0)).current;
  const smallCircleAnim = useRef(new Animated.Value(0)).current;
  const logoAnim = useRef(new Animated.Value(0)).current;
  const transitionDuration = 1000;

  const coverAnimation = useCallback(() => {
    return Animated.parallel([
      Animated.timing(bigCircleAnim, {
        easing: Easing.out(Easing.exp),
        toValue: 1,
        duration: transitionDuration,
        useNativeDriver: true,
      }),
      Animated.timing(smallCircleAnim, {
        easing: Easing.out(Easing.exp),
        delay: transitionDuration / 5,
        toValue: 1,
        duration: transitionDuration,
        useNativeDriver: true,
      }),
      Animated.timing(logoAnim, {
        easing: Easing.out(Easing.exp),
        toValue: 1,
        delay: transitionDuration / 5,
        duration: transitionDuration,
        useNativeDriver: true,
      }),
    ]);
  }, [bigCircleAnim, smallCircleAnim, logoAnim]);

  const unCoverAnimation = useCallback(() => {
    return Animated.parallel([
      Animated.timing(bigCircleAnim, {
        easing: Easing.out(Easing.exp),
        delay: transitionDuration / 5,
        toValue: 0,
        duration: transitionDuration,
        useNativeDriver: true,
      }),
      Animated.timing(smallCircleAnim, {
        easing: Easing.out(Easing.exp),
        toValue: 0,
        duration: transitionDuration,
        useNativeDriver: true,
      }),
      Animated.timing(logoAnim, {
        easing: Easing.out(Easing.exp),
        toValue: 0,
        duration: transitionDuration,
        useNativeDriver: true,
      }),
    ]);
  }, [bigCircleAnim, smallCircleAnim, logoAnim]);

  useEffect(() => {
    if (isTransitioning) {
      coverAnimation().start(() => {
        onScreenCover();
        unCoverAnimation().start(() => onTransitionComplete());
      });
    }
  }, [isTransitioning]);

  return (
    <View style={styles.transitionContainer}>
      <Animated.View
        style={[
          styles.transitionItem,
          styles.bigCircle,
          { transform: [{ scale: bigCircleAnim }] },
        ]}
      />
      <Animated.View
        style={[
          styles.transitionItem,
          styles.smallCircle,
          { transform: [{ scale: smallCircleAnim }] },
        ]}
      />
      <Animated.Image
        source={appLogo}
        style={[
          styles.transitionItem,
          styles.logo,
          { transform: [{ scale: logoAnim }] },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  transitionContainer: {
    position: "absolute",
    width: windowWidth,
    height: windowHeight,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    zIndex: 100,
  },
  transitionItem: {
    position: "absolute",
  },
  bigCircle: {
    backgroundColor: Theme.colors.blue,
    width: CircleMaxRadius,
    height: CircleMaxRadius,
    borderRadius: CircleMaxRadius / 2,
  },
  smallCircle: {
    backgroundColor: Theme.colors.skyBlue,
    width: CircleMaxRadius,
    height: CircleMaxRadius,
    borderRadius: CircleMaxRadius / 2,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

TransitionScreen.propTypes = {
  isTransitioning: PropTypes.bool,
  onScreenCover: PropTypes.func,
  onTransitionComplete: PropTypes.func,
};

TransitionScreen.defaulProps = {
  isTransitioning: false,
  onScreenCover: () => {},
  onTransitionComplete: () => {},
};
