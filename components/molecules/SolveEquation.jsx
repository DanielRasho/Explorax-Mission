import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BoxWithElevation from "../atoms/BoxWithElevation";
import PropTypes from "prop-types";
import { Theme } from "../../constants/theme";
import SimpleButton from "../atoms/SimpleButton";
import EquationPrompt from "../atoms/EquationPrompt";
import Separator from "../atoms/Separator";
import { useGameState } from "../../stores/gameState";
import AnswerButton from "./AnswerButton";

export default function SolveEquation({
  statement,
  unkownChar,
  answers,
  rightAnswer,
  onResponse,
}) {
  const incrementScore = useGameState((state) => state.incrementScore);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleOnAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    if (answer === rightAnswer) {
      incrementScore();
    }
    setTimeout(() => {
      onResponse();
    }, 2000);
  };

  return (
    <>
      <BoxWithElevation>
        <EquationPrompt prompt={statement} variableChar={unkownChar} />
      </BoxWithElevation>
      <Separator height={40} />
      <View style={styles.answersContainer}>
        {answers.map((value, index) => {
          return (
            <AnswerButton
              key={index}
              answer={value}
              selectedAnswer={selectedAnswer}
              rightAnswer={rightAnswer}
              showResult={showResult}
              onPress={handleOnAnswer}
            />
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  answersContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: 20,
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
