import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Pressable, Animated } from "react-native";
import PropTypes, { string, func } from "prop-types";
import { Theme } from "../../constants/theme";

export default function SimpleButton({
  onPressAction,
  text,
  textColor,
  frontColor,
  edgeColor,
  fontSize,
  width,
  height,
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
    <Pressable
      onPress={handleOnPress}
      style={[styles.buttonContainer, { width, height }]}
    >
      <View
        style={[
          styles.buttonShape,
          styles.edge,
          { backgroundColor: edgeColor },
        ]}
      >
        <Text style={[styles.edgeText, { color: edgeColor, fontSize }]}>
          {text}
        </Text>
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
        <Text style={[styles.frontText, { color: textColor, fontSize }]}>
          {text}
        </Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonShape: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 8,
    padding: 8,
  },
  edge: {
    backgroundColor: Theme.colors.darkAqua,
  },
  edgeText: {
    fontSize: Theme.fontSizes.buttonBig,
    fontWeight: Theme.fontWeight.bold,
    textAlign: "center",
  },
  front: {
    position: "absolute",
    backgroundColor: Theme.colors.aqua,
    zIndex: 10,
  },
  frontText: {
    fontSize: Theme.fontSizes.buttonBig,
    fontWeight: Theme.fontWeight.bold,
    textAlign: "center",
  },
});

SimpleButton.propTypes = {
  text: PropTypes.string,
  onPressAction: PropTypes.func,
  textColor: PropTypes.string,
  frontColor: PropTypes.string,
  edgeColor: PropTypes.string,
  fontSize: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SimpleButton.defaultProps = {
  onPressAction: () => {},
  textColor: Theme.colors.white,
  frontColor: Theme.colors.aqua,
  edgeColor: Theme.colors.darkAqua,
  fontSize: Theme.colors.buttonBig,
  width: undefined,
  height: undefined,
};
