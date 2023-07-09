import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PizzaPriceContainer = ({ priceText, propLeft }) => {
  const frameView4Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.mdifavoriteBoxParent, frameView4Style]}>
      <Image
        style={styles.mdifavoriteBoxIcon}
        resizeMode="cover"
        source={require("../assets/mdifavoritebox.png")}
      />
      <Text style={[styles.pizzaName, styles.textLayout]}>Pizza Name</Text>
      <Text style={[styles.text, styles.textLayout]}>{priceText}</Text>
      <Text style={[styles.theLocationFor, styles.textLayout]}>
        The Location for the same
      </Text>
      <Image
        style={styles.carbonlocationIcon}
        resizeMode="cover"
        source={require("../assets/carbonlocation1.png")}
      />
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    height: 16,
    textAlign: "left",
    position: "absolute",
  },
  mdifavoriteBoxIcon: {
    top: 152,
    left: 106,
    width: 19,
    height: 18,
    overflow: "hidden",
    position: "absolute",
  },
  pizzaName: {
    top: 101,
    fontSize: FontSize.size_xs,
    color: Color.black,
    width: 93,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "left",
    left: 13,
  },
  text: {
    top: 154,
    fontSize: FontSize.size_3xs,
    color: Color.red_100,
    width: 32,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "left",
    left: 13,
  },
  theLocationFor: {
    top: 129,
    left: 25,
    fontSize: FontSize.size_7xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.gray_600,
    display: "flex",
    alignItems: "center",
    width: 63,
  },
  carbonlocationIcon: {
    top: 132,
    width: 10,
    height: 10,
    left: 13,
    overflow: "hidden",
    position: "absolute",
  },
  image1Icon: {
    top: 11,
    left: 8,
    width: 120,
    height: 80,
    position: "absolute",
  },
  mdifavoriteBoxParent: {
    top: 617,
    left: 28,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.red_300,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 4,
      height: 6,
    },
    shadowRadius: 11,
    elevation: 11,
    shadowOpacity: 1,
    width: 135,
    height: 182,
    position: "absolute",
  },
});

export default PizzaPriceContainer;
