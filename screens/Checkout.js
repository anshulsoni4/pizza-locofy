import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileMenuContainer1 from "../components/ProfileMenuContainer1";
import PaymentMethodsForm from "../components/PaymentMethodsForm";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Checkout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.checkout}>
      <Text style={[styles.checkout1, styles.payTypo]}>Checkout</Text>
      <ProfileMenuContainer1 />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Cart")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <Image
          style={[styles.mdibellIcon, styles.wrapperLayout]}
          resizeMode="cover"
          source={require("../assets/mdibell.png")}
        />
      </View>
      <View style={styles.nav} />
      <View style={[styles.cardFlagsParent, styles.image4IconPosition]}>
        <View style={styles.cardFlags}>
          <View style={styles.rectangle} />
        </View>
        <View style={styles.cardNumberWrapper}>
          <Text style={styles.cardNumber}>Card number</Text>
        </View>
      </View>
      <Text style={styles.payByBank}>Pay by bank card</Text>
      <View style={styles.parent}>
        <Text style={styles.text}>10.00 $</Text>
        <Image
          style={styles.regularIcons}
          resizeMode="cover"
          source={require("../assets/regularicons.png")}
        />
      </View>
      <Text style={[styles.text1, styles.text1Typo]}>Order 42069</Text>
      <Text style={[styles.lamoda, styles.text1Typo]}>UI Unicorn Store</Text>
      <Text style={styles.lamoda1}>Payment Details</Text>
      <View style={styles.lamodaParent}>
        <Text style={styles.lamoda2}>{`Location `}</Text>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/group-19.png")}
        />
      </View>
      <Text style={styles.lamoda3}>SubTotal</Text>
      <Text style={[styles.lamoda4, styles.lamodaTypo]}>$123.5</Text>
      <Text style={styles.lamoda5}>$2.10</Text>
      <Text style={[styles.lamoda6, styles.lamodaTypo]}>$125.5</Text>
      <Text style={[styles.lamoda7, styles.lamodaTypo1]}>Delivery Charges</Text>
      <Text style={[styles.lamoda8, styles.lamodaTypo1]}>Final Amount</Text>
      <PaymentMethodsForm />
      <Image
        style={[styles.image4Icon, styles.image4IconPosition]}
        resizeMode="cover"
        source={require("../assets/image-41.png")}
      />
      <Pressable
        style={[styles.checkoutInner, styles.groupInnerLayout]}
        onPress={() => navigation.navigate("Confirm")}
      >
        <View style={[styles.groupWrapper, styles.groupInnerLayout]}>
          <View style={[styles.groupWrapper, styles.groupInnerLayout]}>
            <View style={[styles.groupWrapper, styles.groupInnerLayout]}>
              <View style={[styles.groupInner, styles.groupInnerLayout]} />
            </View>
            <Text style={[styles.pay, styles.payTypo]}>Pay</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  payTypo: {
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  wrapperLayout: {
    height: 15,
    position: "absolute",
  },
  groupChildLayout: {
    height: 26,
    width: 26,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    backgroundColor: Color.red_100,
    left: 0,
    top: 0,
  },
  image4IconPosition: {
    left: 38,
    position: "absolute",
  },
  text1Typo: {
    color: Color.black7004D4D4D,
    fontSize: FontSize.size_sm,
    top: 258,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 20,
    letterSpacing: 0,
    position: "absolute",
  },
  lamodaTypo: {
    width: 46,
    left: 290,
    justifyContent: "center",
    fontFamily: FontFamily.montserratExtrabold,
    fontWeight: "800",
    height: 18,
    display: "flex",
    fontSize: FontSize.size_sm,
    alignItems: "center",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  lamodaTypo1: {
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    height: 18,
    display: "flex",
    left: 31,
    color: Color.black7004D4D4D,
    fontSize: FontSize.size_sm,
    alignItems: "center",
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 30,
    width: 181,
    position: "absolute",
  },
  checkout1: {
    top: 68,
    left: 58,
    fontSize: FontSize.size_5xl,
    width: 132,
    height: 41,
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
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
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(255, 0, 0, 0.41)",
    shadowRadius: 4,
    elevation: 4,
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
  rectangleParent: {
    left: 320,
    top: 76,
  },
  nav: {
    height: "0.12%",
    width: "86.15%",
    top: "51.9%",
    right: "8.21%",
    bottom: "47.99%",
    left: "5.64%",
    backgroundColor: Color.black100E5E5E5,
    position: "absolute",
  },
  rectangle: {
    height: "20%",
    top: "20%",
    right: "0%",
    bottom: "60%",
    left: "0%",
    backgroundColor: Color.black300B3B3B3,
    position: "absolute",
    width: "100%",
  },
  cardFlags: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.black200CCCCCC,
    width: 28,
    height: 20,
    overflow: "hidden",
  },
  cardNumber: {
    fontSize: FontSize.placeholderValue_size,
    fontFamily: FontFamily.hintPlaceholder,
    color: Color.black500808080,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0,
  },
  cardNumberWrapper: {
    marginLeft: 8,
    flexDirection: "row",
  },
  cardFlagsParent: {
    top: 372,
    flexDirection: "row",
  },
  payByBank: {
    marginLeft: -157,
    top: 338,
    left: "50%",
    fontSize: FontSize.hintPlaceholder_size,
    lineHeight: 12,
    color: Color.black600666666,
    width: 304,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_13xl,
    lineHeight: 40,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.black9001A1A1A,
    textAlign: "left",
    fontWeight: "500",
  },
  regularIcons: {
    height: 16,
    marginLeft: 8,
    width: 16,
  },
  parent: {
    top: 282,
    alignItems: "center",
    left: 22,
    flexDirection: "row",
    position: "absolute",
  },
  text1: {
    left: 267,
    textAlign: "right",
  },
  lamoda: {
    left: 22,
    color: Color.black7004D4D4D,
    fontSize: FontSize.size_sm,
    top: 258,
    textAlign: "left",
  },
  lamoda1: {
    top: 586,
    width: 143,
    height: 18,
    display: "flex",
    left: 31,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    alignItems: "center",
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0,
    color: Color.black,
    position: "absolute",
  },
  lamoda2: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0,
    left: 0,
    top: 0,
    color: Color.black,
    position: "absolute",
  },
  groupItem: {
    left: 82,
    width: 17,
    height: 16,
    top: 0,
    position: "absolute",
  },
  lamodaParent: {
    top: 120,
    left: 36,
    width: 99,
    height: 20,
    position: "absolute",
  },
  lamoda3: {
    top: 626,
    width: 65,
    height: 19,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    display: "flex",
    left: 31,
    color: Color.black7004D4D4D,
    fontSize: FontSize.size_sm,
    alignItems: "center",
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0,
    position: "absolute",
  },
  lamoda4: {
    top: 622,
  },
  lamoda5: {
    top: 659,
    left: 293,
    width: 38,
    justifyContent: "center",
    fontFamily: FontFamily.montserratExtrabold,
    fontWeight: "800",
    height: 19,
    display: "flex",
    fontSize: FontSize.size_sm,
    alignItems: "center",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  lamoda6: {
    top: 693,
  },
  lamoda7: {
    top: 664,
    width: 128,
  },
  lamoda8: {
    top: 698,
    width: 102,
  },
  image4Icon: {
    top: 148,
    width: 329,
    height: 105,
    borderRadius: Border.br_9xs,
  },
  groupInner: {
    shadowColor: "#ed8e92",
    shadowRadius: 12,
    elevation: 12,
    borderRadius: Border.br_9xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    backgroundColor: Color.red_100,
    left: 0,
    top: 0,
  },
  groupWrapper: {
    left: 0,
    width: 181,
    top: 0,
  },
  pay: {
    top: 3,
    left: 32,
    fontSize: FontSize.size_lg,
    color: Color.white,
    width: 117,
    height: 23,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
  },
  checkoutInner: {
    top: 533,
    left: 106,
  },
  checkout: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Checkout;
