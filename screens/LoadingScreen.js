import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const LoadingScreen = () => {
  return (
    <View style={styles.loadingScreen}>
      <View style={styles.emFek6210524RemovebgPrevieParent}>
        <Image
          style={styles.emFek6210524RemovebgPrevieIcon}
          resizeMode="cover"
          source={require("../assets/90em-fek6-210524removebgpreview-1.png")}
        />
        <Text style={styles.pizzaHouse}>{`Pizza House `}</Text>
      </View>
      <Image
        style={styles.mingcuteloadingFillIcon}
        resizeMode="cover"
        source={require("../assets/mingcuteloadingfill.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emFek6210524RemovebgPrevieIcon: {
    height: 216,
    width: 300,
  },
  pizzaHouse: {
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.white,
    textAlign: "center",
    width: 296,
    height: 58,
    marginTop: 42,
  },
  emFek6210524RemovebgPrevieParent: {
    height: 316,
    paddingBottom: 0,
    width: 300,
    alignItems: "center",
  },
  mingcuteloadingFillIcon: {
    width: 58,
    height: 60,
    marginTop: 244,
    overflow: "hidden",
  },
  loadingScreen: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.red_100,
    flex: 1,
    width: "100%",
    height: 844,
    paddingLeft: 44,
    paddingTop: Padding.p_48xl,
    paddingRight: 46,
    paddingBottom: Padding.p_48xl,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default LoadingScreen;
