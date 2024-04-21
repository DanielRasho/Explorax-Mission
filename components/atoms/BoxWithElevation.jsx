import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Theme } from "../../constants/theme";
import PropTypes from "prop-types";

export default function BoxWithElevation({
  children,
  frontColor,
  edgeColor,
  margin,
  padding,
}) {
  return (
    <View
      style={[
        styles.textBoxShape,
        styles.textBoxContainer,
        {
          margin,
          backgroundColor: edgeColor,
        },
      ]}
    >
      <View
        style={[
          styles.textBoxShape,
          styles.front,
          { padding, backgroundColor: frontColor },
        ]}
      >
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textBoxContainer: {
    paddingBottom: 5,
  },
  textBoxShape: {
    overflow: "hidden",
    borderRadius: 8,
  },
  front: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  frontText: {
    fontSize: Theme.fontSizes.text,
    fontWeight: Theme.fontWeight.bold,
    textAlign: "center",
  },
});

BoxWithElevation.propTypes = {
  children: PropTypes.any,
  frontColor: PropTypes.string,
  edgeColor: PropTypes.string,
  padding: PropTypes.number,
  margin: PropTypes.number,
};

BoxWithElevation.defaultProps = {
  frontColor: Theme.colors.white,
  edgeColor: Theme.colors.grey,
  padding: 10,
  margin: 0,
};
