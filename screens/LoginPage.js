import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginPage}>
      <Text
        style={[styles.letsSignYou, styles.signFlexBox]}
      >{`Let’s Sign you in `}</Text>
      <View style={styles.loginPageChild} />
      <Pressable
        style={styles.signIn}
        onPress={() => navigation.navigate("HomePage1")}
      >
        <Text style={styles.signIn1}>Sign In</Text>
      </Pressable>
      <View style={[styles.loginPageItem, styles.loginShadowBox]} />
      <Text style={[styles.enterName, styles.enterTypo]}>Enter name</Text>
      <View style={[styles.loginPageInner, styles.loginShadowBox]} />
      <Text style={[styles.enterPassword, styles.enterPasswordPosition]}>
        Enter password
      </Text>
      <Text
        style={[styles.enterRegisteredName, styles.orSignUpTypo]}
      >{`Enter registered name
to SIgn in`}</Text>
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.password, styles.nameTypo]}>Password</Text>
      <Text style={[styles.orSignUp, styles.orSignUpTypo]}>
        Or Sign up with
      </Text>
      <Text style={[styles.dontHaveAn, styles.registerPosition]}>
        Don’t have an account?
      </Text>
      <Pressable
        style={[styles.register, styles.registerPosition]}
        onPress={() => navigation.navigate("SignUpPage")}
      >
        <Text style={styles.register1}>Register</Text>
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition1]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconPosition1]}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={styles.biappleIcon}
        resizeMode="cover"
        source={require("../assets/biapple.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.mdieyeOutlineIcon, styles.enterPasswordPosition]}
        resizeMode="cover"
        source={require("../assets/mdieyeoutline1.png")}
      />
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
  signFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  loginShadowBox: {
    height: 47,
    width: 289,
    borderWidth: 1,
    borderColor: "rgba(239, 28, 38, 0.29)",
    borderStyle: "solid",
    left: 41,
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
    backgroundColor: Color.white,
  },
  enterTypo: {
    width: 249,
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    left: 54,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  enterPasswordPosition: {
    top: 349,
    height: 24,
    position: "absolute",
  },
  orSignUpTypo: {
    color: Color.gray_100,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  nameTypo: {
    left: 42,
    height: 20,
    color: Color.gray_100,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  registerPosition: {
    top: 752,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition1: {
    left: "14.49%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    bottom: "34.95%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  letsSignYou: {
    top: 67,
    left: 20,
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.black,
    width: 344,
    height: 34,
  },
  loginPageChild: {
    top: 665,
    left: 49,
    backgroundColor: Color.red_100,
    width: 287,
    height: 45,
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
  signIn1: {
    fontSize: FontSize.size_lg,
    color: Color.white,
    width: 101,
    height: 24,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  signIn: {
    left: 142,
    top: 676,
    position: "absolute",
  },
  loginPageItem: {
    top: 226,
  },
  enterName: {
    top: 238,
    height: 24,
    position: "absolute",
  },
  loginPageInner: {
    top: 337,
  },
  enterPassword: {
    width: 249,
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    left: 54,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  enterRegisteredName: {
    top: 116,
    left: 72,
    width: 247,
    height: 36,
    textAlign: "center",
    position: "absolute",
  },
  name: {
    top: 192,
    width: 61,
    height: 20,
  },
  password: {
    top: 304,
    width: 87,
    height: 20,
  },
  orSignUp: {
    top: 456,
    left: 128,
    width: 128,
    height: 20,
    textAlign: "center",
    position: "absolute",
  },
  dontHaveAn: {
    left: 76,
    width: 183,
    height: 20,
    color: Color.gray_100,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: 752,
  },
  register1: {
    color: Color.red_100,
    width: 65,
    height: 20,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  register: {
    left: 250,
  },
  vectorIcon: {
    height: "5.33%",
    width: "11.79%",
    left: "13.85%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "35.31%",
    right: "74.36%",
    top: "59.36%",
  },
  vectorIcon1: {
    height: "2.15%",
    width: "9.4%",
    right: "76.11%",
    bottom: "38.49%",
    top: "59.36%",
  },
  vectorIcon2: {
    height: "2.39%",
    width: "2.61%",
    top: "60.83%",
    right: "83.54%",
    bottom: "36.78%",
    left: "13.85%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon3: {
    height: "2.52%",
    width: "5.78%",
    top: "61.53%",
    bottom: "35.95%",
    left: "19.86%",
    right: "74.36%",
  },
  vectorIcon4: {
    height: "2.14%",
    width: "9.37%",
    top: "62.55%",
    right: "76.15%",
    bottom: "35.31%",
  },
  biappleIcon: {
    top: 498,
    left: 167,
    width: 50,
    height: 48,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon5: {
    height: "6.04%",
    width: "13.33%",
    top: "59%",
    right: "15.64%",
    left: "71.03%",
  },
  vectorIcon6: {
    height: "5.13%",
    width: "5.88%",
    top: "59.92%",
    right: "17.71%",
    left: "76.41%",
  },
  mdieyeOutlineIcon: {
    left: 291,
    width: 24,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 27,
    top: 74,
    width: 15,
    height: 20,
    position: "absolute",
  },
  loginPage: {
    borderRadius: Border.br_13xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default LoginPage;
