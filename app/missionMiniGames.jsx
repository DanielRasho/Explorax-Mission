/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { Theme } from "../constants/theme";
import SolveEquation from "../components/molecules/SolveEquation";
import Separator from "../components/atoms/Separator";
import { useNavigateWithTransition } from "../stores/navigate";
import { useGameState } from "../stores/currentLevel";
import { PROBLEM_TYPES, TEST_MISSION } from "../assets/GameMissionProblems";

const titleLine = require("../assets/images/titleLine.png");
const character = require("../assets/images/Chanin.png");

export default function MissionMiniGames() {
  const currentLevel = useGameState((state) => state.currentLevel);
  const numLevels = useGameState((state) => state.numLevels);
  const incrementLevel = useGameState((state) => state.incrementLevel);
  const setNumLevels = useGameState((state) => state.setNumLevels);
  const navigate = useNavigateWithTransition((state) => state.navigate);

  const [currentProblem, setCurrentProblem] = useState(
    TEST_MISSION.problems[0],
  );

  useEffect(() => {
    setNumLevels(TEST_MISSION.problems.length);
  });

  useEffect(() => {
    setCurrentProblem(TEST_MISSION.problems[currentLevel]);
  }, [currentLevel]);

  const onResponse = () => {
    if (currentLevel <= numLevels) {
      incrementLevel();
      navigate("/missionMiniGames");
    } else {
      navigate("/missionResults");
    }
  };

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.title}>Desafíate</Text>
      <Image source={titleLine} style={[styles.titleLine]} />
      <View>
        <Image source={titleLine} style={[styles.titleLine]} />
      </View>
      <Separator height={30} />
      <MiniGameProvider problem={currentProblem} onResponse={onResponse} />
      <View style={styles.character}>
        <Image source={character} style={[styles.characterImg]} />
      </View>
    </View>
  );
}

function MiniGameProvider({ problem, onResponse }) {
  switch (problem.type) {
    case PROBLEM_TYPES.SOLVE_THE_EQUATION:
      return (
        <SolveEquation
          statement={problem.statement}
          unkownChar={problem.unkownChar}
          answers={problem.answers}
          rightAnswer={problem.correct_answer}
          onResponse={onResponse}
        />
      );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    ...Platform.select({
      ios: {
        paddingTop: "20%",
      },
      android: {
        paddingTop: "20%",
      },
      default: {
        paddingTop: "5%",
      },
    }),
  },
  title: {
    color: Theme.colors.white,
    fontSize: Theme.fontSizes.title,
    fontWeight: Theme.fontWeight.bold,
  },
  titleLine: {
    width: "70%",
    resizeMode: "contain",
  },
  character: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    bottom: "5%",
    ...Platform.select({
      ios: {
        height: "25%",
        left: 0,
      },
      android: {
        height: "25%",
        left: 0,
      },
      default: {
        height: "30%",
        left: "25%",
      },
    }),
  },
  characterImg: {
    flex: 1,
    height: "100%",
    resizeMode: "contain",
  },
});
