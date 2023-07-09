import * as React from "react";
import { Text, StyleSheet, Pressable, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PopularNowContainer from "../components/PopularNowContainer";
import PizzaPriceContainer from "../components/PizzaPriceContainer";
import ProfileMenuContainer2 from "../components/ProfileMenuContainer2";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const HomePage1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homePage}>
      <Text
        style={[styles.letsEatQuality, styles.searchParentLayout1]}
      >{`Let’s eat
Quality Food`}</Text>
      <Text style={[styles.ayushAsati, styles.ayushAsatiLayout]}>
        Ayush Asati
      </Text>
      <Pressable
        style={styles.seeAll}
        onPress={() => navigation.navigate("Category")}
      >
        <Text style={[styles.seeAll1, styles.seeAll1Typo]}>See All</Text>
      </Pressable>
      <Text style={[styles.popularNow, styles.ayushAsatiLayout]}>
        Popular Now
      </Text>
      <Image
        style={styles.unsplashcGmwfhbdzkIcon}
        resizeMode="cover"
        source={require("../assets/unsplashc-gmwfhbdzk.png")}
      />
      <Image
        style={[styles.homePageChild, styles.searchParentLayout]}
        resizeMode="cover"
        source={require("../assets/frame-37.png")}
      />
      <View style={[styles.searchParent, styles.searchParentLayout]}>
        <Text style={styles.search}>Search</Text>
        <Image
          style={styles.materialSymbolssearchIcon}
          resizeMode="cover"
          source={require("../assets/materialsymbolssearch.png")}
        />
      </View>
      <PopularNowContainer priceText="$7.50" />
      <PopularNowContainer priceText="$6.50" propLeft={211} />
      <PizzaPriceContainer priceText="$8.00" />
      <PizzaPriceContainer priceText="$7.00" propLeft={211} />
      <ProfileMenuContainer2 />
    </View>
  );
};

const styles = StyleSheet.create({
  searchParentLayout1: {
    width: 311,
    left: 32,
  },
  ayushAsatiLayout: {
    height: 23,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  seeAll1Typo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  searchParentLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  letsEatQuality: {
    top: 148,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    height: 69,
    textAlign: "left",
    color: Color.black,
    width: 311,
    position: "absolute",
  },
  ayushAsati: {
    top: 93,
    left: 89,
    fontSize: FontSize.size_lg,
    width: 162,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  seeAll1: {
    fontSize: FontSize.size_3xs,
    color: "rgba(0, 0, 0, 0.37)",
    width: 38,
    height: 16,
    textAlign: "left",
  },
  seeAll: {
    left: 308,
    top: 339,
    position: "absolute",
  },
  popularNow: {
    top: 335,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemibold,
    width: 126,
    left: 32,
    height: 23,
  },
  unsplashcGmwfhbdzkIcon: {
    top: 76,
    left: 30,
    borderRadius: 30,
    width: 40,
    height: 40,
    position: "absolute",
  },
  homePageChild: {
    top: 90,
    left: 316,
    width: 34,
    height: 35,
  },
  search: {
    top: 15,
    left: 45,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.montserratLight,
    color: Color.gray_500,
    width: 49,
    height: 15,
    textAlign: "left",
    position: "absolute",
  },
  materialSymbolssearchIcon: {
    top: 11,
    left: 13,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  searchParent: {
    top: 248,
    backgroundColor: Color.silver_200,
    height: 45,
    width: 311,
    left: 32,
  },
  homePage: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default HomePage1;
