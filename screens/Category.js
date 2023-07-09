import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileContainer from "../components/ProfileContainer";
import PizzaNameForm from "../components/PizzaNameForm";
import PizzaNameContainer from "../components/PizzaNameContainer";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Category = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.category}>
      <Text style={styles.category1}>Category</Text>
      <ProfileContainer />
      <Pressable
        style={[styles.wrapper, styles.searchLayout]}
        onPress={() => navigation.navigate("DescriptionPage")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildBorder]} />
        <Text style={[styles.pizza1, styles.pizzaTypo]}>Pizza #1</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.pizza11, styles.pizzaPosition]}>Pizza #1</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.pizza12, styles.pizzaPosition]}>Pizza #1</Text>
      </View>
      <View style={[styles.groupView, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.viewLayout]} />
        <Text style={[styles.pizza13, styles.pizza13Layout]}>Pizza #1</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.pizza13Layout]}>
        <View style={[styles.groupChild1, styles.pizza13Layout]} />
        <Text style={[styles.pizza14, styles.pizza14Position]}>Pizza #1</Text>
      </View>
      <PizzaNameForm />
      <PizzaNameContainer />
      <PizzaNameContainer propTop={556} propLeft={45} />
      <PizzaNameContainer propTop={668} propLeft={43} />
      <View style={[styles.rectangleParent2, styles.groupChild2Layout]}>
        <View style={[styles.groupChild2, styles.groupChildPosition]} />
        <Image
          style={[styles.mdibellIcon, styles.searchLayout]}
          resizeMode="cover"
          source={require("../assets/mdibell.png")}
        />
      </View>
      <View style={[styles.categoryInner, styles.groupChild3Layout]}>
        <View style={[styles.searchParent, styles.groupChild3Layout]}>
          <Text style={[styles.search, styles.searchLayout]}>Search</Text>
          <View style={[styles.groupChild3, styles.groupChild3Layout]} />
          <Image
            style={[styles.materialSymbolssearchIcon, styles.pizza14Position]}
            resizeMode="cover"
            source={require("../assets/materialsymbolssearch.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 15,
    position: "absolute",
  },
  groupChildLayout: {
    width: 121,
    height: 34,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
  },
  pizzaTypo: {
    height: 19,
    fontSize: FontSize.size_base,
    top: 7,
    color: Color.lightgray_100,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "center",
  },
  groupLayout: {
    width: 96,
    height: 34,
    position: "absolute",
  },
  pizzaPosition: {
    width: 69,
    left: 13,
    height: 19,
    fontSize: FontSize.size_base,
    top: 7,
    textAlign: "center",
    position: "absolute",
  },
  viewLayout: {
    width: 126,
    height: 34,
    position: "absolute",
  },
  pizza13Layout: {
    width: 91,
    position: "absolute",
  },
  pizza14Position: {
    left: 13,
    position: "absolute",
  },
  groupChild2Layout: {
    height: 26,
    width: 26,
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  groupChild3Layout: {
    height: 45,
    width: 311,
    position: "absolute",
  },
  category1: {
    top: 68,
    left: 58,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.black,
    width: 132,
    height: 41,
    textAlign: "center",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 23,
    top: 76,
    left: 35,
  },
  groupChild: {
    borderColor: "#aba0a0",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    height: 34,
    width: 121,
    position: "absolute",
  },
  pizza1: {
    left: 17,
    width: 87,
    position: "absolute",
    height: 19,
    fontSize: FontSize.size_base,
    top: 7,
  },
  rectangleParent: {
    left: 36,
    height: 34,
    top: 155,
  },
  groupItem: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
    borderColor: "#aba0a0",
  },
  pizza11: {
    color: Color.lightgray_100,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    width: 69,
  },
  rectangleGroup: {
    left: 173,
    top: 155,
  },
  groupInner: {
    borderColor: "#ff0000",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
    width: 96,
  },
  pizza12: {
    fontFamily: FontFamily.montserratRegular,
    color: Color.red_100,
  },
  rectangleContainer: {
    left: 69,
    top: 207,
  },
  rectangleView: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
    borderColor: "#aba0a0",
  },
  pizza13: {
    left: 18,
    height: 19,
    fontSize: FontSize.size_base,
    top: 7,
    color: Color.lightgray_100,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "center",
  },
  groupView: {
    left: 189,
    top: 207,
  },
  groupChild1: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
    borderColor: "#aba0a0",
    height: 34,
  },
  pizza14: {
    width: 65,
    height: 19,
    fontSize: FontSize.size_base,
    top: 7,
    color: Color.lightgray_100,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "center",
  },
  rectangleParent1: {
    left: 280,
    height: 34,
    top: 155,
  },
  groupChild2: {
    backgroundColor: Color.red_100,
    shadowColor: "rgba(255, 0, 0, 0.41)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 26,
    width: 26,
    position: "absolute",
  },
  mdibellIcon: {
    top: 5,
    left: 5,
    width: 16,
    overflow: "hidden",
  },
  rectangleParent2: {
    left: 320,
    top: 76,
  },
  search: {
    top: 15,
    left: 45,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.montserratLight,
    color: Color.gray_500,
    textAlign: "left",
    width: 49,
  },
  groupChild3: {
    backgroundColor: Color.silver_200,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  materialSymbolssearchIcon: {
    top: 11,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  searchParent: {
    left: 0,
    top: 0,
    width: 311,
  },
  categoryInner: {
    top: 261,
    left: 35,
  },
  category: {
    borderRadius: Border.br_13xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Category;
