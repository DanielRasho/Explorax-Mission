import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BoxWithElevation from "../atoms/BoxWithElevation";
import PropTypes from "prop-types";
import { Theme } from "../../constants/theme";
import SimpleButton from "../atoms/SimpleButton";
import EquationPrompt from "../atoms/EquationPrompt";
import Separator from "../atoms/Separator";

export default function SolveEquation({
  statement,
  unkownChar,
  answers,
  rightAnswer,
  onResponse,
}) {
  return (
    <>
      <BoxWithElevation>
        <EquationPrompt prompt={statement} variableChar={unkownChar} />
      </BoxWithElevation>
      <Separator height={40} />
      <View style={styles.answersContainer}>
        {answers.map((value, index) => {
          return <SimpleButton key={index} text={value} {...styles.button} />;
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  answersContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    fontSize: Theme.fontSizes.textBig,
    width: "40%",
  },
});

SolveEquation.propTypes = {
  statement: PropTypes.string,
  unkownChar: PropTypes.string,
  answers: PropTypes.array,
  rightAnswer: PropTypes.string,
  onResponse: PropTypes.func,
};

SolveEquation.defaultProps = {
  statement: "? + 2 = 5",
  unkownChar: "?",
};
