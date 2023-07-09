import React, { useMemo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PizzaNameContainer = ({ propTop, propLeft }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.groupParent, groupViewStyle]}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={[styles.image3Icon, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        />
        <View style={[styles.parent, styles.parentPosition]}>
          <Text style={[styles.text, styles.pizzaTypo]}>4.0 (3)</Text>
          <Image
            style={[styles.groupItem, styles.parentPosition]}
            resizeMode="cover"
            source={require("../assets/star-11.png")}
          />
        </View>
        <Text style={[styles.pizzaDescriptionPizza, styles.pizzaTypo]}>
          Pizza description Pizza description
        </Text>
      </View>
      <Text style={[styles.pizzaName, styles.text1Typo]}>Pizza Name</Text>
      <Text style={[styles.text1, styles.text1Typo]}>$12.00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
    height: 72,
    position: "absolute",
  },
  parentPosition: {
    position: "absolute",
    height: 16,
  },
  pizzaTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  text1Typo: {
    width: 93,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "left",
    height: 16,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 0.3,
    width: 307,
    top: 0,
  },
  image3Icon: {
    width: 80,
  },
  text: {
    top: 4,
    left: 23,
    color: Color.gray_300,
    width: 32,
    height: 8,
  },
  groupItem: {
    top: 2,
    left: 3,
    borderRadius: Border.br_12xs,
    width: 21,
    height: 16,
  },
  parent: {
    left: 154,
    width: 55,
    height: 16,
    top: 50,
  },
  pizzaDescriptionPizza: {
    top: 28,
    color: Color.gray_600,
    width: 178,
    left: 93,
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
    top: 0,
  },
  pizzaName: {
    top: 10,
    fontSize: FontSize.size_sm,
    color: Color.black,
    left: 93,
  },
  text1: {
    left: 94,
    fontSize: FontSize.size_xs,
    color: Color.red_200,
    top: 50,
  },
  groupParent: {
    top: 444,
    left: 44,
    height: 72,
    width: 307,
    position: "absolute",
  },
});

export default PizzaNameContainer;
