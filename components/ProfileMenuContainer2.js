import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchContainer from "./SearchContainer";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ProfileMenuContainer2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.menu1, styles.menu1Position]}>
      <View style={styles.navigationmenuHomeParent}>
        <View
          style={[styles.navigationmenuHome, styles.navigationmenuSpaceBlock]}
        >
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/home.png")}
          />
          <Text style={styles.home}>Home</Text>
        </View>
        <Pressable
          style={[styles.navigationmenuHome1, styles.navigationmenuSpaceBlock]}
          onPress={() => navigation.navigate("Category")}
        >
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/search.png")}
          />
          <Text style={styles.home}>Search</Text>
        </Pressable>
      </View>
      <SearchContainer
        iconText={require("../assets/cart.png")}
        navigationText="Cart"
        navigationIconText={require("../assets/user.png")}
        navigationSearchText="Profile"
        homeZIndex={1}
        onNavigationmenuHomePress={() => navigation.navigate("Cart")}
      />
      <Pressable
        style={[styles.menu1Inner, styles.menu1Position]}
        onPress={() => navigation.navigate("Cart")}
      >
        <View style={styles.shopWrapper}>
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/shop.png")}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  menu1Position: {
    position: "absolute",
    flexDirection: "row",
  },
  navigationmenuSpaceBlock: {
    paddingVertical: Padding.p_smi_5,
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
  },
  homeIcon: {
    width: 24,
    height: 24,
  },
  home: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.sFProTextRegular,
    color: Color.darkgray_100,
    textAlign: "left",
    marginTop: 12,
  },
  navigationmenuHome: {
    alignItems: "center",
  },
  navigationmenuHome1: {
    marginLeft: 8,
    alignItems: "center",
  },
  navigationmenuHomeParent: {
    zIndex: 0,
    flexDirection: "row",
  },
  shopWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.red_100,
    borderColor: "#a9c0ff",
    borderWidth: 6,
    padding: Padding.p_11xl,
    borderStyle: "solid",
    alignItems: "center",
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
    flexDirection: "row",
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
    flexDirection: "row",
  },
});

export default ProfileMenuContainer2;
