import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const InitialPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.initialPage}>
      <Image
        style={styles.girlEatsPizzaAndWatchesMo}
        resizeMode="cover"
        source={require("../assets/girl-eats-pizza-and-watches-movies.png")}
      />
      <Pressable
        style={styles.emFek6210524RemovebgPrevie}
        onPress={() => navigation.navigate("LoadingScreen")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/90em-fek6-210524removebgpreview-11.png")}
        />
      </Pressable>
      <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-121.png")}
        />
      </Pressable>
      <Image
        style={styles.initialPageChild}
        resizeMode="cover"
        source={require("../assets/group-3.png")}
      />
      <View style={[styles.signInWrapper, styles.wrapperShadowBox]}>
        <Text style={[styles.signIn, styles.signInTypo]}>Sign In</Text>
      </View>
      <View style={[styles.registerWrapper, styles.wrapperShadowBox]}>
        <Text style={[styles.register, styles.signInTypo]}>Register</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperShadowBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 0,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 5,
      height: 9,
    },
    shadowColor: "#ed8e92",
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  signInTypo: {
    height: 24,
    width: 106,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
  },
  girlEatsPizzaAndWatchesMo: {
    top: 76,
    left: 38,
    width: 314,
    height: 458,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  emFek6210524RemovebgPrevie: {
    left: 302,
    top: 36,
    width: 52,
    height: 36,
    position: "absolute",
  },
  wrapper: {
    left: 30,
    top: 40,
    width: 16,
    height: 20,
    position: "absolute",
  },
  initialPageChild: {
    top: 593,
    left: 164,
    width: 62,
    height: 7,
    position: "absolute",
  },
  signIn: {
    color: Color.white,
  },
  signInWrapper: {
    top: 648,
    left: 45,
    backgroundColor: Color.red_100,
    width: 300,
    height: 45,
  },
  register: {
    color: "#2a2626",
  },
  registerWrapper: {
    top: 722,
    left: 44,
    backgroundColor: "#ed888d",
    borderStyle: "solid",
    borderColor: "#ef1c26",
    borderWidth: 1,
    width: 302,
    height: 47,
  },
  initialPage: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default InitialPage;
