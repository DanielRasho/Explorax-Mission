import React, { useEffect, useState } from "react";
import { Theme } from "../../constants/theme";
import SimpleButton from "../atoms/SimpleButton";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function AnswerButton({
  answer,
  selectedAnswer,
  rightAnswer,
  showResult,
  onPress,
}) {
  const [answerStyle, setAnswerStyle] = useState({});

  useEffect(() => {
    if (showResult) {
      if (answer === selectedAnswer && answer === rightAnswer)
        setAnswerStyle({
          frontColor: Theme.colors.green,
          edgeColor: Theme.colors.darkGreen,
        });
      else if (answer === selectedAnswer)
        setAnswerStyle({
          frontColor: Theme.colors.red,
          edgeColor: Theme.colors.darkRed,
        });
    }
  }, [showResult]);

  return (
    <SimpleButton
      text={answer}
      onPressAction={() => onPress(answer)}
      {...{ ...styles.button, ...answerStyle }}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: Theme.fontSizes.textBig,
    width: "40%",
  },
});

AnswerButton.propTypes = {
  answer: PropTypes.string,
  selectedAnswer: PropTypes.string,
  rightAnswer: PropTypes.string,
  showResult: PropTypes.bool,
  onPress: PropTypes.func,
};
