import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Border, Color, FontSize } from "../GlobalStyles";

const SignUpPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUpPage}>
      <View style={styles.frameParent}>
        <View style={styles.signUpWrapper}>
          <Text style={[styles.signUp, styles.signUpTypo]}>Sign up</Text>
        </View>
        <View style={[styles.enterNameWrapper, styles.enterWrapperShadowBox]}>
          <Text style={[styles.enterName, styles.signUpTypo]}>Enter name</Text>
        </View>
        <View
          style={[styles.enterPasswordWrapper, styles.enterWrapperShadowBox]}
        >
          <Text style={[styles.enterName, styles.signUpTypo]}>
            Enter password
          </Text>
        </View>
        <View
          style={[
            styles.enterEmailAddressWrapper,
            styles.enterWrapperShadowBox,
          ]}
        >
          <Text style={[styles.enterName, styles.signUpTypo]}>
            Enter email address
          </Text>
        </View>
        <View style={styles.registerParent}>
          <Text style={styles.register}>Register</Text>
          <Text
            style={[styles.fillTheDetails, styles.fillTheDetailsTypo]}
          >{`Fill the details and Create
New Account`}</Text>
        </View>
        <Text style={[styles.name, styles.nameLayout]}>Name</Text>
        <Text style={[styles.password, styles.nameLayout]}>Password</Text>
        <Text style={[styles.eMailAddress, styles.nameLayout]}>
          E-mail Address
        </Text>
        <Image
          style={[styles.mdieyeOutlineIcon, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/mdieyeoutline.png")}
        />
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.iAgreeToContainer, styles.fillTheDetailsTypo]}>
          <Text style={styles.iAgreeTo}>{`I agree to the `}</Text>
          <Text style={styles.termsAndServices}>{`Terms and Services
`}</Text>
          <Text style={styles.iAgreeTo}>{`and `}</Text>
          <Text style={styles.termsAndServices}>Privacy Policy</Text>
        </Text>
      </View>
      <Pressable
        style={[styles.wrapper, styles.nameLayout]}
        onPress={() => navigation.goBack()}
      >
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
  signUpTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    height: 24,
  },
  enterWrapperShadowBox: {
    paddingHorizontal: Padding.p_xs,
    height: 47,
    width: 289,
    borderColor: "rgba(239, 28, 38, 0.29)",
    left: 18,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "flex-end",
    paddingVertical: Padding.p_3xs,
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
  fillTheDetailsTypo: {
    height: 36,
    width: 247,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  nameLayout: {
    height: 20,
    position: "absolute",
  },
  frameChildLayout: {
    width: 24,
    position: "absolute",
  },
  signUp: {
    fontSize: FontSize.size_lg,
    color: Color.white,
    width: 101,
    height: 24,
    textAlign: "center",
  },
  signUpWrapper: {
    top: 604,
    left: 26,
    backgroundColor: Color.red_100,
    width: 287,
    height: 45,
    paddingHorizontal: 0,
    justifyContent: "flex-end",
    paddingVertical: Padding.p_3xs,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 5,
      height: 9,
    },
    shadowColor: "#ed8e92",
    borderRadius: Border.br_9xs,
    alignItems: "center",
    position: "absolute",
  },
  enterName: {
    fontSize: FontSize.size_base,
    color: Color.gray_200,
    width: 249,
    textAlign: "left",
    height: 24,
  },
  enterNameWrapper: {
    top: 165,
  },
  enterPasswordWrapper: {
    top: 404,
  },
  enterEmailAddressWrapper: {
    top: 285,
  },
  register: {
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.black,
    height: 34,
    textAlign: "center",
    width: 344,
  },
  fillTheDetails: {
    marginTop: 15,
    color: Color.gray_100,
    textAlign: "center",
  },
  registerParent: {
    top: 0,
    left: 0,
    height: 85,
    justifyContent: "center",
    alignItems: "center",
    width: 344,
    position: "absolute",
  },
  name: {
    top: 131,
    width: 61,
    left: 19,
    height: 20,
    color: Color.gray_100,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  password: {
    top: 371,
    width: 87,
    left: 19,
    height: 20,
    color: Color.gray_100,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  eMailAddress: {
    top: 252,
    width: 128,
    left: 19,
    height: 20,
    color: Color.gray_100,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  mdieyeOutlineIcon: {
    top: 416,
    left: 268,
    height: 24,
    overflow: "hidden",
  },
  frameChild: {
    top: 497,
    left: 20,
    borderColor: "#867d7d",
    height: 22,
    borderWidth: 1,
    borderStyle: "solid",
    width: 24,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.white,
  },
  iAgreeTo: {
    color: Color.gray_100,
  },
  termsAndServices: {
    color: Color.red_200,
  },
  iAgreeToContainer: {
    top: 494,
    left: 59,
    textAlign: "left",
    position: "absolute",
  },
  frameParent: {
    top: 61,
    left: 23,
    height: 649,
    width: 344,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 31,
    top: 66,
    width: 15,
  },
  signUpPage: {
    borderRadius: Border.br_13xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default SignUpPage;
