import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Theme } from "../../constants/theme";

export default function EquationPrompt({ prompt, variableChar }) {
  // State to store chunks
  const [chunks, setChunks] = useState([]);

  // Calculate the different chunks in which an equation is separated
  // based on the variableChar which should be rendered differently
  useEffect(() => {
    const newChunks = [];
    const promptArray = prompt.split("");
    let chunk = "";

    promptArray.forEach((element) => {
      if (element === variableChar) {
        newChunks.push(chunk, variableChar);
        chunk = "";
      } else {
        chunk += element;
      }
    });
    newChunks.push(chunk);
    setChunks(newChunks);
  }, [prompt, variableChar]); // Specify dependencies here

  return (
    <View style={{ flexDirection: "row" }}>
      {chunks.map((element, index) => {
        const chunkStyle =
          element === variableChar ? styles.equationVariable : null;
        return (
          <Text key={index} style={[styles.equationText, chunkStyle]}>
            {element}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  equationText: {
    fontSize: Theme.fontSizes.textBig,
    fontWeight: Theme.fontWeight.bold,
    color: Theme.colors.darkBlue,
  },
  equationVariable: {
    backgroundColor: Theme.colors.skyBlue,
    color: Theme.colors.white,
    overflow: "hidden",
    borderRadius: 10,
    paddingHorizontal: 5,
  },
});

EquationPrompt.propTypes = {
  prompt: PropTypes.string,
  variableChar: PropTypes.string,
};
