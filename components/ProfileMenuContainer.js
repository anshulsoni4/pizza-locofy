import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import ContainerCard from "./ContainerCard";
import { Border, Color, Padding } from "../GlobalStyles";

const ProfileMenuContainer = () => {
  return (
    <View style={[styles.menu1, styles.menu1FlexBox]}>
      <ContainerCard
        cartId={require("../assets/home.png")}
        cartText="Home"
        cartIconText={require("../assets/search.png")}
        profileText="Search"
        propZIndex={0}
      />
      <ContainerCard
        cartId={require("../assets/cart.png")}
        cartText="Cart"
        cartIconText={require("../assets/user.png")}
        profileText="Profile"
        propZIndex={1}
      />
      <View style={[styles.menu1Inner, styles.menu1FlexBox]}>
        <View style={styles.shopWrapper}>
          <Image
            style={styles.shopIcon}
            resizeMode="cover"
            source={require("../assets/shop.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu1FlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  shopIcon: {
    width: 24,
    height: 24,
  },
  shopWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.red_100,
    borderColor: "#a9c0ff",
    borderWidth: 6,
    padding: Padding.p_11xl,
    alignItems: "center",
    borderStyle: "solid",
  },
  menu1Inner: {
    marginLeft: -44,
    top: -24,
    left: "50%",
    borderRadius: Border.br_41xl,
    borderColor: "#424242",
    borderWidth: 78,
    padding: Padding.p_7xs,
    zIndex: 2,
    borderStyle: "solid",
  },
  menu1: {
    top: 770,
    left: -9,
    borderTopLeftRadius: Border.br_13xl,
    borderTopRightRadius: Border.br_13xl,
    backgroundColor: Color.lavenderblush,
    width: 409,
    height: 75,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: 0,
    justifyContent: "space-between",
  },
});

export default ProfileMenuContainer;
