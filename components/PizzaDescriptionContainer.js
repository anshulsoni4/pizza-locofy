import React, { useMemo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PizzaDescriptionContainer = ({ monthNumber, propLeft }) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View
      style={[
        styles.rectangleParent,
        styles.groupChildPosition,
        groupView1Style,
      ]}
    >
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <Image
        style={[styles.image3Icon, styles.groupChildPosition]}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
      />
      <View style={[styles.wrapper, styles.textLayout]}>
        <Text style={[styles.text, styles.pizzaTypo]}>{monthNumber}</Text>
      </View>
      <Text style={[styles.pizzaDescriptionPizza, styles.pizzaTypo]}>
        Pizza description Pizza description
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 72,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textLayout: {
    height: 8,
    width: 20,
  },
  pizzaTypo: {
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 0.3,
    width: 307,
    height: 72,
  },
  image3Icon: {
    width: 80,
  },
  text: {
    color: Color.gray_300,
    textAlign: "center",
    justifyContent: "center",
    height: 8,
    width: 20,
    left: 0,
    top: 0,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_3xs,
  },
  wrapper: {
    top: 54,
    left: 182,
    width: 20,
    position: "absolute",
  },
  pizzaDescriptionPizza: {
    top: 28,
    left: 93,
    color: Color.gray_600,
    textAlign: "left",
    width: 178,
    height: 16,
  },
  rectangleParent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 307,
    height: 72,
  },
});

export default PizzaDescriptionContainer;
