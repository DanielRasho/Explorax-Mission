import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Platform,
  ImageBackground,
} from "react-native";
import BoxWithElevation from "../components/atoms/BoxWithElevation";
import SimpleButton from "../components/atoms/SimpleButton";
import { Theme } from "../constants/theme";
import Separator from "../components/atoms/Separator";
import { useGameState } from "../stores/gameState";

const scoreBoxImg = require("../assets/images/scoreBox.png");
const bigScoreBoxImg = require("../assets/images/bigScoreBox.png");
const coinImg = require("../assets/images/coin.png");
const greenStarImg = require("../assets/images/greenStar.png");
const yellowStarImg = require("../assets/images/yellowStar.png");
const redStarImg = require("../assets/images/redStar.png");

export default function MissionResults() {
  const numLevels = useGameState((state) => state.numLevels);
  const rightAnswers = useGameState((state) => state.score);

  return (
    <View style={styles.viewContainer}>
      <BoxWithElevation
        frontColor={Theme.colors.blue}
        edgeColor={Theme.colors.darkBlue}
        padding={20}
        width="90%"
      >
        <Separator height={40} />
        <Text style={styles.title}>¡Buen trabajo!</Text>
        <Separator height={30} />
        <View style={styles.scoresContainer}>
          <ImageBackground source={scoreBoxImg} style={styles.scoreBox}>
            <Text style={styles.scoreBoxValue}> {numLevels.toString()} </Text>
            <Text style={styles.scoreBoxCaption}>Preguntas</Text>
            <Image source={yellowStarImg} style={styles.starImage} />
          </ImageBackground>
          <Separator width={20} />
          <ImageBackground source={scoreBoxImg} style={styles.scoreBox}>
            <Text style={styles.scoreBoxValue}>{rightAnswers.toString()}</Text>
            <Text style={styles.scoreBoxCaption}>Correctas</Text>
            <Image source={greenStarImg} style={styles.starImage} />
          </ImageBackground>
          <Separator width={20} />
          <ImageBackground source={scoreBoxImg} style={styles.scoreBox}>
            <Text style={styles.scoreBoxValue}>
              {(numLevels - rightAnswers).toString()}{" "}
            </Text>
            <Text style={styles.scoreBoxCaption}>Incorrectas</Text>
            <Image source={redStarImg} style={styles.starImage} />
          </ImageBackground>
        </View>
        <Separator height={30} />
        <ImageBackground source={bigScoreBoxImg} style={styles.coinsBox}>
          <Text style={styles.coinsText}>85</Text>
          <Image source={coinImg} style={styles.cointImage} />
        </ImageBackground>
        <Separator height={30} />
        <SimpleButton
          text="INICIAR MISION # 2"
          frontColor={Theme.colors.white}
          edgeColor={Theme.colors.grey}
          textColor={Theme.colors.darkBlue}
          width="60%"
        />
      </BoxWithElevation>
    </View>
  );
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
        paddingTop: "30%",
      },
      default: {
        paddingTop: "10%",
      },
    }),
  },
  title: {
    fontSize: Theme.fontSizes.display,
    color: Theme.colors.white,
    fontWeight: Theme.fontWeight.bold,
  },
  scoresContainer: {
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  scoreBox: {
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
  },
  scoreBoxValue: {
    color: Theme.colors.darkBlue,
    fontWeight: Theme.fontWeight.bold,
    fontSize: Theme.fontSizes.textBig,
  },
  scoreBoxCaption: {
    color: Theme.colors.darkBlue,
    fontWeight: Theme.fontWeight.bold,
    fontSize: Theme.fontSizes.tag,
  },
  coinsBox: {
    resizeMode: "stretch",
    justifyContent: "center",
    alignItems: "center",
    width: 140,
    height: 70,
  },
  coinsText: {
    color: Theme.colors.darkBlue,
    fontWeight: Theme.fontWeight.bold,
    fontSize: Theme.fontSizes.display,
  },
  cointImage: {
    position: "absolute",
    width: 80,
    height: 80,
    left: -40,
  },
  starImage: {
    position: "absolute",
    width: 40,
    height: 40,
    top: -25,
  },
});
