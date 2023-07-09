import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const DescriptionPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.descriptionPage}>
      <Text style={styles.chicagoPizza}>Chicago Pizza</Text>
      <Text style={[styles.pizzaWithExtra, styles.offFlexBox]}>
        Pizza with extra cheese
      </Text>
      <Text style={[styles.veggiessExtraCheese, styles.addToCartTypo]}>
        veggiess, extra cheese, sliced mushrooms
      </Text>
      <Image
        style={styles.descriptionPageChild}
        resizeMode="cover"
        source={require("../assets/group-24.png")}
      />
      <View style={[styles.descriptionPageItem, styles.parentLayout]} />
      <Text style={[styles.off, styles.offLayout]}>25 % off</Text>
      <Text style={[styles.totalPrice, styles.addToCartTypo]}>Total Price</Text>
      <Text style={[styles.text, styles.textTypo]}>$48.32</Text>
      <Text style={[styles.description, styles.textTypo]}>Description</Text>
      <Text style={[styles.theLocationFor, styles.offFlexBox]}>
        The Location for the same
      </Text>
      <Image
        style={styles.carbonlocationIcon}
        resizeMode="cover"
        source={require("../assets/carbonlocation.png")}
      />
      <View style={[styles.parent, styles.parentLayout]}>
        <Text style={[styles.text1, styles.textTypo]}>4.0 (3)</Text>
        <Image
          style={[styles.frameChild, styles.parentLayout]}
          resizeMode="cover"
          source={require("../assets/star-1.png")}
        />
      </View>
      <Text style={[styles.someRadomTestContainer, styles.offFlexBox]}>
        <Text
          style={[styles.someRadomTest, styles.addToCartTypo]}
        >{`some radom test about pizza some radom test about pizza some radom test about pizza some radom test about pizza some radom test about pizza some radom test about pizza some radom test about pizza some radom test about pizza so.. `}</Text>
        <Text style={styles.readMore}>Read more</Text>
      </Text>
      <View style={styles.descriptionPageInner}>
        <View style={styles.frameItemPosition}>
          <View style={[styles.frameItem, styles.frameItemPosition]} />
          <Text style={[styles.addToCart, styles.parentLayout]}>
            Add to Cart
          </Text>
        </View>
      </View>
      <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-12.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  offFlexBox: {
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  addToCartTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  parentLayout: {
    height: 24,
    position: "absolute",
  },
  offLayout: {
    width: 40,
    fontSize: FontSize.size_3xs,
  },
  textTypo: {
    color: Color.gray_300,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  frameItemPosition: {
    left: 0,
    top: 0,
    height: 45,
    width: 181,
    position: "absolute",
  },
  chicagoPizza: {
    top: 49,
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    width: 200,
    height: 43,
    alignItems: "center",
    display: "flex",
    left: 95,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  pizzaWithExtra: {
    top: 367,
    fontSize: FontSize.size_xl,
    width: 277,
    height: 34,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "left",
    left: 48,
    color: Color.black,
  },
  veggiessExtraCheese: {
    top: 92,
    color: "#9ea5aa",
    width: 201,
    height: 28,
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    textAlign: "center",
    left: 95,
    position: "absolute",
  },
  descriptionPageChild: {
    top: 120,
    left: 88,
    width: 218,
    height: 201,
    position: "absolute",
  },
  descriptionPageItem: {
    top: 338,
    backgroundColor: Color.lavenderblush,
    width: 54,
    borderRadius: Border.br_9xs,
    left: 48,
  },
  off: {
    top: 344,
    left: 55,
    color: Color.red_100,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    position: "absolute",
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  totalPrice: {
    top: 738,
    left: 56,
    fontSize: FontSize.hintPlaceholder_size,
    color: Color.darkgray_100,
    width: 59,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  text: {
    top: 763,
    left: 50,
    fontSize: 22,
    width: 81,
  },
  description: {
    top: 488,
    left: 52,
    fontSize: FontSize.size_base,
    width: 110,
  },
  theLocationFor: {
    top: 403,
    left: 64,
    fontSize: 8,
    fontFamily: FontFamily.montserratRegular,
    color: Color.gray_600,
    width: 113,
    height: 16,
  },
  carbonlocationIcon: {
    top: 404,
    width: 12,
    height: 11,
    left: 48,
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    top: 6,
    left: 29,
    width: 40,
    fontSize: FontSize.size_3xs,
  },
  frameChild: {
    top: 2,
    left: 3,
    borderRadius: Border.br_12xs,
    width: 26,
  },
  parent: {
    top: 428,
    left: 46,
    width: 69,
  },
  someRadomTest: {
    color: "#a0a7ad",
  },
  readMore: {
    color: Color.black,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  someRadomTestContainer: {
    top: 553,
    left: 58,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.4,
    width: 248,
  },
  frameItem: {
    backgroundColor: Color.red_100,
    shadowColor: "#ed8e92",
    shadowOffset: {
      width: 5,
      height: 9,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    borderRadius: Border.br_9xs,
  },
  addToCart: {
    top: 11,
    left: 32,
    fontSize: FontSize.size_lg,
    color: Color.white,
    width: 117,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    height: 24,
  },
  descriptionPageInner: {
    top: 743,
    left: 144,
    height: 45,
    width: 181,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 36,
    top: 61,
    width: 15,
    height: 20,
    position: "absolute",
  },
  descriptionPage: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default DescriptionPage;
