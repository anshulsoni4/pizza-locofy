import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PizzaDescriptionContainer from "./PizzaDescriptionContainer";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PizzaNameFilter = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.groupParent, styles.groupLayout]}
      onPress={() => navigation.navigate("DescriptionPage")}
    >
      <View style={[styles.groupContainer, styles.groupPosition]}>
        <PizzaDescriptionContainer monthNumber="02" />
        <Text style={[styles.pizzaName, styles.textTypo]}>Pizza Name</Text>
        <Text style={[styles.text, styles.textTypo]}>$12.00</Text>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.text1, styles.textFlexBox]}>+</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.text2, styles.textFlexBox]}>-</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 72,
    width: 307,
  },
  groupPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    height: 16,
    width: 93,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleLayout: {
    height: 12,
    width: 12,
    top: 52,
    position: "absolute",
  },
  textFlexBox: {
    height: 10,
    width: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.gray_300,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_smi,
    left: 1,
    position: "absolute",
  },
  pizzaName: {
    top: 10,
    left: 93,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  text: {
    top: 50,
    left: 94,
    fontSize: FontSize.size_xs,
    color: Color.red_200,
  },
  groupContainer: {
    height: 72,
    width: 307,
  },
  groupChild: {
    borderRadius: Border.br_12xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 0.4,
    width: 13,
    height: 13,
  },
  text1: {
    top: 1,
  },
  rectangleParent: {
    left: 207,
  },
  text2: {
    top: 0,
    height: 10,
    width: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.gray_300,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_smi,
    left: 1,
  },
  rectangleGroup: {
    left: 166,
  },
  groupParent: {
    top: 188,
    left: 45,
    position: "absolute",
    height: 72,
    width: 307,
  },
});

export default PizzaNameFilter;
