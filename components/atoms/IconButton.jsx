import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Pressable, Animated } from "react-native";
import PropTypes, { string, func } from "prop-types";
import { Theme } from "../../constants/theme";

export default function IconButton({
  onPressAction,
  IconSvg,
  width,
  height,
  frontColor,
  edgeColor,
}) {
  const pressAnim = useRef(new Animated.Value(-5)).current;

  const handleOnPress = () => {
    onPressAction();
    Animated.sequence([
      Animated.timing(pressAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(pressAnim, {
        toValue: -5,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Pressable onPress={handleOnPress} style={styles.buttonContainer}>
      <View
        style={[
          styles.buttonShape,
          styles.edge,
          { backgroundColor: edgeColor },
        ]}
      >
        <IconSvg width={width} height={height} />
      </View>
      <Animated.View
        style={[
          styles.buttonShape,
          styles.front,
          {
            backgroundColor: frontColor,
            transform: [{ translateY: pressAnim }],
          },
        ]}
      >
        <IconSvg width={width} height={height} />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "relative",
    alignItems: "flex-start",
  },
  buttonShape: {
    overflow: "hidden",
    borderRadius: 8,
    padding: 8,
  },
  edge: {
    backgroundColor: Theme.colors.darkAqua,
  },
  edgeText: {
    color: Theme.colors.darkAqua,
    fontSize: Theme.fontSizes.text,
    fontWeight: Theme.fontWeight.bold,
  },
  front: {
    position: "absolute",
    backgroundColor: Theme.colors.aqua,
    zIndex: 10,
  },
  frontText: {
    color: Theme.colors.white,
    fontSize: Theme.fontSizes.text,
    fontWeight: Theme.fontWeight.bold,
    textAlign: "center",
  },
});

IconButton.propTypes = {
  onPressAction: PropTypes.func,
  IconSvg: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  frontColor: PropTypes.string,
  edgeColor: PropTypes.string,
};

IconButton.defaultProps = {
  onPressAction: () => {},
  width: 30,
  height: 30,
  frontColor: Theme.colors.aqua,
  edgeColor: Theme.colors.darkAqua,
};
