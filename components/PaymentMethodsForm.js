import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const PaymentMethodsForm = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.paymentMethods}
      onPress={() => navigation.navigate("Confirm")}
    >
      <View style={[styles.satelliteInput, styles.satelliteInputFlexBox]}>
        <Text style={styles.hint}>Ohter payment methods</Text>
      </View>
      <View
        style={[
          styles.paymentMethodButton40pxParent,
          styles.satelliteInputFlexBox,
        ]}
      >
        <View style={styles.paymentMethodButton40px}>
          <View style={styles.otherPayMethod}>
            <View style={[styles.otherPayMethodChild, styles.otherPosition]} />
            <Image
              style={[
                styles.otherPayMethodvariant9Icon,
                styles.otherIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/otherpaymethodvariant9.png")}
            />
          </View>
        </View>
        <View
          style={[styles.paymentMethodButton40px1, styles.paymentSpaceBlock]}
        >
          <Image
            style={styles.otherPayMethod}
            resizeMode="cover"
            source={require("../assets/otherpaymethod.png")}
          />
        </View>
        <View
          style={[styles.paymentMethodButton40px2, styles.paymentSpaceBlock]}
        >
          <Image
            style={styles.otherPayMethod}
            resizeMode="cover"
            source={require("../assets/otherpaymethod1.png")}
          />
        </View>
        <View
          style={[styles.paymentMethodButton40px3, styles.paymentSpaceBlock]}
        >
          <View style={styles.otherPayMethod}>
            <View style={styles.otherPosition}>
              <View
                style={[styles.otherPayMethodChild, styles.otherPosition]}
              />
            </View>
            <Image
              style={[
                styles.otherPayMethodvariant6Icon,
                styles.otherIconLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/otherpaymethodvariant6.png")}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  satelliteInputFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  otherPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  otherIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  paymentSpaceBlock: {
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_7xs,
    flex: 1,
  },
  hint: {
    fontSize: FontSize.hintPlaceholder_size,
    letterSpacing: 0,
    lineHeight: 12,
    fontFamily: FontFamily.hintPlaceholder,
    color: Color.black600666666,
    textAlign: "left",
    flex: 1,
  },
  satelliteInput: {
    height: 12,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
  otherPayMethodChild: {
    backgroundColor: Color.silver_100,
  },
  otherPayMethodvariant9Icon: {
    height: "90%",
    width: "91.34%",
    top: "5%",
    right: "4.49%",
    bottom: "5%",
    left: "4.17%",
  },
  otherPayMethod: {
    width: 48,
    height: 20,
  },
  paymentMethodButton40px: {
    backgroundColor: Color.gray_400,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_7xs,
    flex: 1,
  },
  paymentMethodButton40px1: {
    backgroundColor: Color.mediumslateblue,
  },
  paymentMethodButton40px2: {
    backgroundColor: Color.lightblue,
  },
  otherPayMethodvariant6Icon: {
    width: "41.66%",
    right: "29.17%",
    left: "29.17%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  paymentMethodButton40px3: {
    backgroundColor: Color.darkorange,
  },
  paymentMethodButton40pxParent: {
    height: 40,
    marginTop: 8,
  },
  paymentMethods: {
    top: 443,
    left: 22,
    width: 336,
    position: "absolute",
  },
});

export default PaymentMethodsForm;
