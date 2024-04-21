import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import SimpleButton from "../components/atoms/SimpleButton";
import BoxWithElevation from "../components/atoms/BoxWithElevation";
import { Theme } from "../constants/theme";
import Separator from "../components/atoms/Separator";
import { TEST_MISSION } from "../assets/GameMissionProblems";

const titleLine = require("../assets/images/titleLine.png");
const character = require("../assets/images/Chanin.png");

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function StartMissionView() {
  return (
    <View style={styles.viewContainer}>
      <Separator height="20%" />
      <BoxWithElevation {...styles.missionCard}>
        <Text style={[styles.text, styles.title]}>¡Desafíate!</Text>
        <Image source={titleLine} style={[styles.titleLine]} />
        <Separator height={20} />
        <Text style={[styles.text]}>
          Supera estos desafios y empieza a completar la mision de:
        </Text>
        <Text style={[styles.text, styles.missionName]}>
          {TEST_MISSION.title}
        </Text>
        <Separator height={50} />
        <SimpleButton text="¡ACEPTO EL RETO!" {...styles.startButton} />
      </BoxWithElevation>
      <View style={styles.character}>
        <Image source={character} style={[styles.characterImg]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  missionCard: {
    frontColor: Theme.colors.blue,
    edgeColor: Theme.colors.darkBlue,
    padding: 30,
    margin: 8,
  },
  title: {
    fontSize: Theme.fontSizes.display,
    fontWeight: "bold",
  },
  titleLine: {
    width: "80%",
  },
  text: {
    color: Theme.colors.white,
    fontSize: Theme.fontSizes.text,
    textAlign: "center",
  },
  missionName: {
    fontWeight: Theme.fontWeight.bold,
  },
  startButton: {
    fontSize: Theme.fontSizes.buttonSmall,
    textColor: Theme.colors.darkBlue,
    frontColor: Theme.colors.white,
    edgeColor: Theme.colors.grey,
    width: "80%",
  },
  character: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    bottom: 0,
    ...Platform.select({
      ios: {
        height: "35%",
        left: 0,
      },
      android: {
        height: "35%",
        left: 0,
      },
      default: {
        height: "40%",
        left: "20%",
      },
    }),
  },
  characterImg: {
    flex: 1,
    height: "100%",
    resizeMode: "contain",
  },
});
