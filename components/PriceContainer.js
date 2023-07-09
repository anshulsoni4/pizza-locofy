import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import PizzaDescriptionContainer from "./PizzaDescriptionContainer";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PriceContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.groupParent, styles.groupLayout]}>
      <View style={[styles.groupContainer, styles.groupPosition]}>
        <PizzaDescriptionContainer monthNumber="01" propLeft={12} />
        <Text style={[styles.pizzaName, styles.text1Typo]}>Pizza Name</Text>
        <Text style={styles.totalAmout}>Total Amout</Text>
        <Text style={[styles.text, styles.textTypo]}>$120.5</Text>
        <Pressable
          style={styles.orderMore}
          onPress={() => navigation.navigate("Category")}
        >
          <Text style={[styles.orderMore1, styles.textTypo]}>order more</Text>
        </Pressable>
        <Text style={[styles.text1, styles.text1Typo]}>$12.00</Text>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.text2, styles.textFlexBox]}>+</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.text3, styles.textFlexBox]}>-</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 395,
    width: 328,
  },
  groupPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1Typo: {
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    width: 93,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
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
    color: Color.gray_300,
    fontSize: FontSize.size_smi,
    left: 1,
    textAlign: "center",
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  pizzaName: {
    top: 10,
    left: 105,
    color: Color.black,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  totalAmout: {
    top: 339,
    left: 5,
    fontFamily: FontFamily.montserratRegular,
    height: 16,
    width: 93,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  text: {
    top: 366,
    fontSize: FontSize.size_5xl,
    height: 29,
    width: 93,
    textAlign: "center",
    color: Color.black,
    left: 0,
    position: "absolute",
  },
  orderMore1: {
    fontSize: FontSize.size_xl,
    color: Color.red_100,
    width: 134,
    height: 34,
  },
  orderMore: {
    left: 194,
    top: 244,
    position: "absolute",
  },
  text1: {
    top: 50,
    left: 106,
    fontSize: FontSize.size_xs,
    color: Color.red_200,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  groupContainer: {
    height: 395,
    width: 328,
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
  text2: {
    top: 1,
  },
  rectangleParent: {
    left: 219,
  },
  text3: {
    top: 0,
    height: 10,
    width: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.gray_300,
    fontSize: FontSize.size_smi,
    left: 1,
  },
  rectangleGroup: {
    left: 178,
  },
  groupParent: {
    top: 316,
    left: 33,
    position: "absolute",
  },
});

export default PriceContainer;
