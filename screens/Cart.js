import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuContainer from "../components/MenuContainer";
import PizzaNameFilter from "../components/PizzaNameFilter";
import PriceContainer from "../components/PriceContainer";
import CheckoutContainer from "../components/CheckoutContainer";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Cart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cart}>
      <Text style={styles.myCart}>My Cart</Text>
      <MenuContainer />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={[styles.mdibellIcon, styles.wrapperLayout]}
          resizeMode="cover"
          source={require("../assets/mdibell.png")}
        />
      </View>
      <PizzaNameFilter />
      <PriceContainer />
      <CheckoutContainer
        checkoutButtonText="Checkout"
        onGroupPressablePress={() => navigation.navigate("Checkout")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 15,
    position: "absolute",
  },
  groupChildLayout: {
    height: 26,
    width: 26,
    position: "absolute",
  },
  myCart: {
    top: 68,
    left: 58,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.black,
    textAlign: "center",
    width: 132,
    height: 41,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 35,
    width: 23,
    top: 76,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.red_100,
    shadowColor: "rgba(255, 0, 0, 0.41)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  mdibellIcon: {
    top: 5,
    left: 5,
    width: 16,
    overflow: "hidden",
  },
  rectangleParent: {
    left: 320,
    top: 76,
  },
  cart: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Cart;
