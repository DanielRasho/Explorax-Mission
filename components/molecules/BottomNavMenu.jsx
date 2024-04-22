import React from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";
import IconButton from "../atoms/IconButton";
import AchievmentsBtn from "../../assets/images/menu/achievmentsBtn.svg";
import HomeBtn from "../../assets/images/menu/homeBtn.svg";
import shopBtn from "../../assets/images/menu/shopBtn.svg";
import treasureBtn from "../../assets/images/menu/treasureBtn.svg";
import { Theme } from "../../constants/theme";
import Separator from "../atoms/Separator";

const menuBackground = require("../../assets/images/menu/menuBackground.png");
const Logo = require("../../assets/images/LogoOnDark.png");

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function BottomNavBar() {
  return (
    <View style={[styles.navContainer]}>
      <Image source={menuBackground} style={[styles.menuBackground]} />
      <IconButton
        IconSvg={HomeBtn}
        frontColor={Theme.colors.skyBlue}
        edgeColor={Theme.colors.darkSkyBlue}
      />
      <Separator width={8} />
      <IconButton
        IconSvg={shopBtn}
        frontColor={Theme.colors.skyBlue}
        edgeColor={Theme.colors.darkSkyBlue}
      />
      <Separator width={8} />
      <View style={[styles.logoContainer]}>
        <Image source={Logo} style={styles.logoImg} />
      </View>
      <Separator width={8} />
      <IconButton
        IconSvg={treasureBtn}
        frontColor={Theme.colors.skyBlue}
        edgeColor={Theme.colors.darkSkyBlue}
      />
      <Separator width={8} />
      <IconButton
        IconSvg={AchievmentsBtn}
        frontColor={Theme.colors.skyBlue}
        edgeColor={Theme.colors.darkSkyBlue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "17%",
    paddingBottom: 15,
    zIndex: 50,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  menuBackground: {
    position: "absolute",
    flex: 1,
    top: 0,
    height: windowHeight * 0.4,
    resizeMode: "contain",
  },
  logoContainer: {
    width: 120,
    height: 100,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  logoImg: {
    width: "100%",
    resizeMode: "contain",
  },
});
