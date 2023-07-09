import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.homePage}
      onPress={() => navigation.navigate("GetStartedWindow")}
    >
      <View
        style={[styles.wepikExport20230622044315fm6Parent, styles.wepikLayout]}
      >
        <Image
          style={[styles.wepikExport20230622044315fm6Icon, styles.wepikLayout]}
          resizeMode="cover"
          source={require("../assets/wepikexport20230622044315fm6q-1.png")}
        />
        <View style={styles.welcomeToParent}>
          <Text
            style={[styles.welcomeTo, styles.welcomeToFlexBox]}
          >{`Welcome to 
`}</Text>
          <Text
            style={[styles.pizzaHouse, styles.welcomeToFlexBox]}
          >{`Pizza House `}</Text>
          <Text style={[styles.ourChefsAre, styles.welcomeToFlexBox]}>
            Our chefs are working 24/7 and are ready to accept visitors and at
            any time fo the day and night.
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wepikLayout: {
    width: 735,
    position: "absolute",
  },
  welcomeToFlexBox: {
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  wepikExport20230622044315fm6Icon: {
    top: 288,
    left: 172,
    height: 490,
  },
  welcomeTo: {
    left: 57,
    fontSize: FontSize.size_9xl,
    width: 194,
    height: 39,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.white,
    top: 0,
  },
  pizzaHouse: {
    top: 67,
    left: 8,
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    width: 296,
    height: 58,
  },
  ourChefsAre: {
    top: 125,
    left: 0,
    fontSize: FontSize.size_sm,
    height: 55,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.white,
    width: 307,
  },
  welcomeToParent: {
    left: 213,
    height: 180,
    width: 307,
    top: 0,
    position: "absolute",
  },
  wepikExport20230622044315fm6Parent: {
    top: 66,
    left: -172,
    height: 778,
  },
  homePage: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.red_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default HomePage;
